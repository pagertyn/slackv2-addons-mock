import UserModel from '../models/user-model';
import {
  getCurrentUserData,
  redirectToSignIn,
  checkSignedIn,
  checkHasFeature
} from '../util/current-user';

export const UPDATE_CURRENT_USER = 'updateCurrentUser';
export const FETCH_CURRENT_USER = 'fetchCurrentUser';
export const CURRENT_USER_FETCH_ERROR = 'currentUserFetchError';

export function updateCurrentUser(user) {
  return {
    type: UPDATE_CURRENT_USER,
    payload: user
  };
}

export function fetchCurrentUser() {
  return {
    type: FETCH_CURRENT_USER
  };
}

export function currentUserFetchError(error) {
  return {
    type: CURRENT_USER_FETCH_ERROR,
    payload: error
  };
}

export function loadCurrentUserData() {
  return async (dispatch) => {
    try {
      dispatch(fetchCurrentUser());

      const { data: currentUserData } = await getCurrentUserData();

      // If auth fails, will be automatically redirected
      checkSignedIn(currentUserData);
      checkHasFeature(currentUserData);

      const currentUser = new UserModel(currentUserData);
      dispatch(updateCurrentUser(currentUser));
    } catch (error) {
      console.error(error);
      dispatch(currentUserFetchError(error));
      redirectToSignIn();
    }
  };
}
