import getFeData from './fe-data';
import config from '../config/app';
import { redirectTo } from './general';
import getEnvironment from './environment';

export const getCurrentUserData = async () => getFeData();

export const redirectToSignIn = () => {
  const path = window.location.pathname;
  const signInUrl = `/sign_in${path ? `?user_return_to=${path}` : ''}`;
  redirectTo(signInUrl);
};

export const isSignedInByMetadata = () => {
  if (getEnvironment() === 'development') return true;

  const hasMetadata = document.querySelector('meta[name="user-id"]')
    && document.querySelector('meta[name="user-id"]').attributes[1].value.length > 0
    && document.querySelector('meta[name="account-id"]')
    && document.querySelector('meta[name="account-id"]').attributes[1].value.length > 0;
  return Boolean(hasMetadata);
};

export const isUserDataValid = (user) => {
  const valid = user
    && user.id
    && user.accountId;
  return Boolean(valid);
};

export const hasFeatureToggle = (user) => {
  const hasToggle = user
    && user.toggles
    && user.toggles.find(toggle => toggle.name === config.FEATURE_TOGGLE);
  return Boolean(hasToggle);
};
