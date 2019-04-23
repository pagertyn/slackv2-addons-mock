import UserModel from './user/model';
import getFeData from './util';

export const FETCH_FE_DATA_REQUEST = 'fetchFeDataRequest';
export const FETCH_FE_DATA_SUCCESS = 'fetchFeDataSuccess';
export const FETCH_FE_DATA_ERROR = 'fetchFeDataError';

function fetchRequest() {
  return {
    type: FETCH_FE_DATA_REQUEST
  };
}

function fetchSuccess(user, account) {
  return {
    type: FETCH_FE_DATA_SUCCESS,
    payload: { user, account }
  };
}

function fetchError(error) {
  return {
    type: FETCH_FE_DATA_ERROR,
    payload: error
  };
}

export function fetchFeData() {
  return async (dispatch) => {
    try {
      dispatch(fetchRequest());

      const { data: currentFeData } = await getFeData();

      const currentUser = new UserModel(currentFeData);
      const currentAccount = currentFeData.current_account;
      dispatch(fetchSuccess(currentUser, currentAccount));
    } catch (error) {
      console.error(error);
      dispatch(fetchError(error));
    }
  };
}
