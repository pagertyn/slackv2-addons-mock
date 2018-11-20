import getFeData from './fe-data';
import config from '../config/app';
import { redirectTo } from './general';

export const getCurrentUserData = async () => getFeData();

export const redirectToSignIn = () => {
  const path = window.location.pathname;
  const signInUrl = `/sign_in${path ? `?user_return_to=${path}` : ''}`;
  redirectTo(signInUrl);
};

export const checkSignedIn = (response) => {
  if (
    config.ENVIRONMENT === 'development'
    || (
      response
      && response.current_user
      && response.current_account
      && response.current_user.id
      && response.current_account.id
    )
  ) {
    return true;
  }

  redirectToSignIn();
  return false;
};

export const checkHasFeature = (response) => {
  const features = (
    response && response.account_features && response.account_features.features
  ) || [];
  if (config.ENVIRONMENT === 'development' || features.includes(config.FEATURE_FLAG)) {
    return true;
  }

  // redirect to 404 page if not allowed on feature
  redirectTo('/404');
  return false;
};
