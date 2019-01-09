import getFeData from './fe-data';
import config from '../config/app';
import { redirectTo } from './general';
import getEnvironment from './environment';

export const getCurrentUserData = async () => getFeData();

export const redirectToSignIn = () => {
  if (getEnvironment() === 'development') {
    return;
  }
  const path = window.location.pathname;
  const signInUrl = `/sign_in${path ? `?user_return_to=${path}` : ''}`;
  redirectTo(signInUrl);
};

export const checkSignedInByMetadata = () => {
  if (getEnvironment() === 'development'
      || (
        document.querySelector('meta[name="user-id"]')
        && document.querySelector('meta[name="user-id"]').attributes[1].value.length > 0
        && document.querySelector('meta[name="account-id"]')
        && document.querySelector('meta[name="account-id"]').attributes[1].value.length > 0
      )
  ) {
    return true;
  }
  redirectToSignIn();
  return false;
};

export const checkUser = (response) => {
  if (
    getEnvironment() === 'development'
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
  if (getEnvironment() === 'development' || features.includes(config.FEATURE_FLAG)) {
    return true;
  }

  // redirect to 404 page if not allowed on feature
  redirectTo('/404');
  return false;
};
