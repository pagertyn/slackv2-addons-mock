import {
  UPDATE_CURRENT_USER,
  FETCH_CURRENT_USER,
  CURRENT_USER_FETCH_ERROR
} from '../actions/current-user';

export default function currentUserReducer(
  state = { user: {}, isFetching: false, error: null },
  action
) {
  switch (action.type) {
    case UPDATE_CURRENT_USER:
      return { ...state, user: action.payload, isFetching: false };
    case FETCH_CURRENT_USER:
      return { ...state, error: null, isFetching: true };
    case CURRENT_USER_FETCH_ERROR:
      return { ...state, error: action.payload, isFetching: false };
    default:
      return state;
  }
}
