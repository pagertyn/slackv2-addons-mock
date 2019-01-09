import getFeData from './fe-data';
import { redirectTo } from './general';
import getEnvironment from './environment';
import config from '../config/app';
import {
  getCurrentUserData,
  redirectToSignIn,
  checkSignedInByMetadata,
  checkUser,
  checkHasFeature
} from './current-user';

jest.mock('./fe-data.js');
jest.mock('./general.js');
jest.mock('./environment.js');
jest.mock('../config/app.js');

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

describe('checkSignedInByMetadata', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return true and not redirect if development', () => {
    getEnvironment.mockReturnValue('development');
    const returnValue = checkSignedInByMetadata();
    expect(returnValue).toEqual(true);
    expect(redirectTo).toHaveBeenCalledTimes(0);
  });

  it('should redirect if metadata values are not set', () => {
    checkSignedInByMetadata();
    expect(redirectTo).toHaveBeenCalledTimes(1);
  });

  it('should return true and not redirect if metadata values are set', () => {
    document.head.innerHTML = '<meta name="user-id" value="1234">';
    document.head.innerHTML += '<meta name="account-id" value="3456">';

    expect(checkSignedInByMetadata()).toEqual(true);
    expect(redirectTo).toHaveBeenCalledTimes(0);
  });
});

describe('checkUser', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return true and not redirect if development', () => {
    getEnvironment.mockReturnValue('development');
    const returnValue = checkUser();
    expect(returnValue).toEqual(true);
    expect(redirectTo).toHaveBeenCalledTimes(0);
  });

  it('should return true and not redirect if current_user.id and current_account.id exist', () => {
    const returnValue = checkUser({
      current_user: { id: 1234 },
      current_account: { id: 3456 }
    });
    expect(returnValue).toEqual(true);
    expect(redirectTo).toHaveBeenCalledTimes(0);
  });

  it('should redirect if no response is passed in', () => {
    checkUser();
    expect(redirectTo).toHaveBeenCalledTimes(1);
  });

  it('should redirect if response is empty', () => {
    checkUser({});
    expect(redirectTo).toHaveBeenCalledTimes(1);
  });
});

describe('checkHasFeature', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return true and not redirect if development', () => {
    getEnvironment.mockReturnValue('development');
    const returnValue = checkHasFeature();
    expect(returnValue).toEqual(true);
    expect(redirectTo).toHaveBeenCalledTimes(0);
  });

  it('should return true and not redirect if account has feature', () => {
    config.FEATURE_FLAG = 'my_awesome_feature';
    const returnValue = checkHasFeature({
      account_features: { features: ['my_awesome_feature'] }
    });
    expect(returnValue).toEqual(true);
    expect(redirectTo).toHaveBeenCalledTimes(0);
  });

  it('should redirect if no response is passed in', () => {
    checkHasFeature();
    expect(redirectTo).toHaveBeenCalledTimes(1);
    expect(redirectTo).toHaveBeenCalledWith('/404');
  });

  it('should redirect if response is empty', () => {
    checkHasFeature({});
    expect(redirectTo).toHaveBeenCalledTimes(1);
    expect(redirectTo).toHaveBeenCalledWith('/404');
  });

  it('should redirect if response account does not have feature', () => {
    config.FEATURE_FLAG = 'my_awesome_feature';
    checkHasFeature({
      account_features: { features: ['some_other_feature'] }
    });
    expect(redirectTo).toHaveBeenCalledTimes(1);
    expect(redirectTo).toHaveBeenCalledWith('/404');
  });
});
