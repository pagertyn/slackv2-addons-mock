import {
  FETCH_FE_DATA_REQUEST,
  FETCH_FE_DATA_SUCCESS,
  FETCH_FE_DATA_ERROR
} from './actions';

export default function feDataReducer(
  state = {
    user: {},
    account: {},
    isFetching: false,
    error: null
  },
  action
) {
  switch (action.type) {
    case FETCH_FE_DATA_REQUEST:
      return { ...state, error: null, isFetching: true };
    case FETCH_FE_DATA_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        account: action.payload.account,
        isFetching: false
      };
    case FETCH_FE_DATA_ERROR:
      return { ...state, error: action.payload, isFetching: false };
    default:
      return state;
  }
}
