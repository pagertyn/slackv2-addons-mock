import getFeData from './fe-data';
import config from '../config/app';
import { redirectTo } from './general';
import {
  getCurrentUserData,
  redirectToSignIn,
  checkSignedIn,
  checkHasFeature
} from './current-user';

jest.mock('../util/fe-data.js');
jest.mock('../util/general.js');
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

describe('checkSignedIn', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return true and not redirect if development', () => {
    config.ENVIRONMENT = 'development';
    const returnValue = checkSignedIn();
    expect(returnValue).toEqual(true);
    expect(redirectTo).toHaveBeenCalledTimes(0);
  });

  it('should return true and not redirect if current_user.id and current_account.id exist', () => {
    config.ENVIRONMENT = 'production';
    const returnValue = checkSignedIn({
      current_user: { id: 1234 },
      current_account: { id: 3456 }
    });
    expect(returnValue).toEqual(true);
    expect(redirectTo).toHaveBeenCalledTimes(0);
  });

  it('should redirect if no response is passed in', () => {
    config.ENVIRONMENT = 'production';
    checkSignedIn();
    expect(redirectTo).toHaveBeenCalledTimes(1);
  });

  it('should redirect if response is empty', () => {
    config.ENVIRONMENT = 'production';
    checkSignedIn({});
    expect(redirectTo).toHaveBeenCalledTimes(1);
  });
});

describe('checkHasFeature', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return true and not redirect if development', () => {
    config.ENVIRONMENT = 'development';
    const returnValue = checkHasFeature();
    expect(returnValue).toEqual(true);
    expect(redirectTo).toHaveBeenCalledTimes(0);
  });

  it('should return true and not redirect if account has feature', () => {
    config.ENVIRONMENT = 'production';
    config.FEATURE_FLAG = 'my_awesome_feature';
    const returnValue = checkHasFeature({
      account_features: { features: ['my_awesome_feature'] }
    });
    expect(returnValue).toEqual(true);
    expect(redirectTo).toHaveBeenCalledTimes(0);
  });

  it('should redirect if no response is passed in', () => {
    config.ENVIRONMENT = 'production';
    checkHasFeature();
    expect(redirectTo).toHaveBeenCalledTimes(1);
    expect(redirectTo).toHaveBeenCalledWith('/404');
  });

  it('should redirect if response is empty', () => {
    config.ENVIRONMENT = 'production';
    checkHasFeature({});
    expect(redirectTo).toHaveBeenCalledTimes(1);
    expect(redirectTo).toHaveBeenCalledWith('/404');
  });

  it('should redirect if response account does not have feature', () => {
    config.ENVIRONMENT = 'production';
    config.FEATURE_FLAG = 'my_awesome_feature';
    checkHasFeature({
      account_features: { features: ['some_other_feature'] }
    });
    expect(redirectTo).toHaveBeenCalledTimes(1);
    expect(redirectTo).toHaveBeenCalledWith('/404');
  });
});
