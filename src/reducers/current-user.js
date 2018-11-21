import {
  FETCH_CURRENT_USER_REQUEST,
  FETCH_CURRENT_USER_SUCCESS,
  FETCH_CURRENT_USER_ERROR
} from '../actions/current-user';

export default function currentUserReducer(
  state = { user: {}, isFetching: false, error: null },
  action
) {
  switch (action.type) {
    case FETCH_CURRENT_USER_REQUEST:
      return { ...state, error: null, isFetching: true };
    case FETCH_CURRENT_USER_SUCCESS:
      return { ...state, user: action.payload, isFetching: false };
    case FETCH_CURRENT_USER_ERROR:
      return { ...state, error: action.payload, isFetching: false };
    default:
      return state;
  }
}
