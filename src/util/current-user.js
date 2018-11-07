import getFeData from './fe-data';
import config from '../config/app';
import { redirectTo } from '../util/general';

export const getCurrentUserData = async () => {
  return await getFeData();
};

export const redirectToSignIn = () => {
  const path = window.location.pathname;
  const signInUrl = '/sign_in' + (path ? `?user_return_to=${path}` : '');
  redirectTo(signInUrl);
};

export const checkSignedIn = (response) => {
  if ((response.current_user.id && response.current_account.id)
        || config.ENVIRONMENT === 'development') {
    return true;
  }

  redirectToSignIn();
};

export const checkHasFeature = (response) => {
  let features = (response.account_features && response.account_features.features) || [];
  if (config.ENVIRONMENT === 'development' || features.includes(config.FEATURE_FLAG)) {
    return true;
  }

  //redirect to 404 page if not allowed on feature
  redirectTo('/404');
};
