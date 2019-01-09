import getFeData from './fe-data';
import { redirectTo } from './general';
import config from '../config/app';
import getEnvironment from './environment';
import {
  getCurrentUserData,
  redirectToSignIn,
  isSignedInByMetadata,
  isUserDataValid,
  hasFeatureFlag
} from './current-user';

jest.mock('./fe-data.js');
jest.mock('./general.js');
jest.mock('../config/app.js');
jest.mock('./environment.js');

describe('getCurrentUserData', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should call getFeData', () => {
    getCurrentUserData();
    expect(getFeData).toHaveBeenCalledTimes(1);
  });
});

describe('redirectToSignIn', () => {
  it('should call redirectTo, passing in correct url', () => {
    redirectToSignIn();
    expect(redirectTo).toHaveBeenCalledWith('/sign_in?user_return_to=/');
  });
});

describe('isSignedInByMetadata', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    getEnvironment.mockReturnValue('production');
  });

  it('should return true if development', () => {
    getEnvironment.mockReturnValue('development');
    expect(isSignedInByMetadata()).toEqual(true);
  });

  it('should return false if metadata values are not set', () => {
    expect(isSignedInByMetadata()).toEqual(false);
  });

  it('should return true and not redirect if metadata values are set', () => {
    document.head.innerHTML = '<meta name="user-id" value="1234">';
    document.head.innerHTML += '<meta name="account-id" value="3456">';
    expect(isSignedInByMetadata()).toEqual(true);
  });
});

describe('isUserDataValid', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return true if user.id and user.accountId exist', () => {
    const returnValue = isUserDataValid({
      id: 1234,
      accountId: 3456
    });
    expect(returnValue).toEqual(true);
  });

  it('should return false no response is passed in', () => {
    expect(isUserDataValid()).toEqual(false);
  });

  it('should return false if response is empty', () => {
    expect(isUserDataValid({})).toEqual(false);
  });
});

describe('hasFeatureFlag', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return true if account has feature flag', () => {
    config.FEATURE_FLAG = 'my_awesome_feature';
    const returnValue = hasFeatureFlag({
      features: ['my_awesome_feature']
    });
    expect(returnValue).toEqual(true);
  });

  it('should return false if no response is passed in', () => {
    expect(hasFeatureFlag()).toEqual(false);
  });

  it('should return false if response is empty', () => {
    expect(hasFeatureFlag({})).toEqual(false);
  });

  it('should return false if account does not have feature flag', () => {
    config.FEATURE_FLAG = 'my_awesome_feature';
    const returnValue = hasFeatureFlag({
      features: ['some_other_feature']
    });
    expect(returnValue).toEqual(false);
  });
});
