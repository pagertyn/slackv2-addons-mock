import reducer from './current-user';
import * as types from '../actions/current-user';

describe('current-user reducer', () => {
  const prevState = { somePreviousState: true };

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      user: {},
      isFetching: false,
      error: null
    });
  });

  it('should handle FETCH_CURRENT_USER_REQUEST', () => {
    expect(
      reducer(prevState, {
        type: types.FETCH_CURRENT_USER_REQUEST
      })
    ).toEqual({
      ...prevState,
      isFetching: true,
      error: null
    });
  });

  it('should handle FETCH_CURRENT_USER_SUCCESS', () => {
    const payload = 'the current user';

    expect(
      reducer(prevState, {
        type: types.FETCH_CURRENT_USER_SUCCESS,
        payload
      })
    ).toEqual({
      ...prevState,
      user: payload,
      isFetching: false
    });
  });

  it('should handle FETCH_CURRENT_USER_ERROR', () => {
    const payload = 'the error';

    expect(
      reducer(prevState, {
        type: types.FETCH_CURRENT_USER_ERROR,
        payload
      })
    ).toEqual({
      ...prevState,
      isFetching: false,
      error: payload
    });
  });
});
