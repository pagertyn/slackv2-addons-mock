import UserModel from '../models/user-model';
import {
  getCurrentUserData,
  redirectToSignIn,
  checkSignedIn,
  checkHasFeature
} from '../util/current-user';

export const FETCH_CURRENT_USER_REQUEST = 'fetchCurrentUserRequest';
export const FETCH_CURRENT_USER_SUCCESS = 'fetchCurrentUserSuccess';
export const FETCH_CURRENT_USER_ERROR = 'fetchCurrentUserError';

function fetchRequest() {
  return {
    type: FETCH_CURRENT_USER_REQUEST
  };
}

function fetchSuccess(user) {
  return {
    type: FETCH_CURRENT_USER_SUCCESS,
    payload: user
  };
}

function fetchError(error) {
  return {
    type: FETCH_CURRENT_USER_ERROR,
    payload: error
  };
}

export function fetchCurrentUser() {
  return async (dispatch) => {
    try {
      dispatch(fetchRequest());

      const { data: currentUserData } = await getCurrentUserData();

      // If auth fails, will be automatically redirected
      checkSignedIn(currentUserData);
      checkHasFeature(currentUserData);

      const currentUser = new UserModel(currentUserData);
      dispatch(fetchSuccess(currentUser));
    } catch (error) {
      console.error(error);
      dispatch(fetchError(error));
      redirectToSignIn();
    }
  };
}
