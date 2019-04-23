import reducer from './reducer';
import * as types from './actions';

describe('fe-data reducer', () => {
  const prevState = { somePreviousState: true };

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      user: {},
      account: {},
      isFetching: false,
      error: null
    });
  });

  it('should handle FETCH_FE_DATA_REQUEST', () => {
    expect(
      reducer(prevState, {
        type: types.FETCH_FE_DATA_REQUEST
      })
    ).toEqual({
      ...prevState,
      isFetching: true,
      error: null
    });
  });

  it('should handle FETCH_FE_DATA_SUCCESS', () => {
    const payload = {
      user: 'the current user',
      account: 'some account'
    };

    expect(
      reducer(prevState, {
        type: types.FETCH_FE_DATA_SUCCESS,
        payload
      })
    ).toEqual({
      ...prevState,
      user: payload.user,
      account: payload.account,
      isFetching: false
    });
  });

  it('should handle FETCH_FE_DATA_ERROR', () => {
    const payload = 'the error';

    expect(
      reducer(prevState, {
        type: types.FETCH_FE_DATA_ERROR,
        payload
      })
    ).toEqual({
      ...prevState,
      isFetching: false,
      error: payload
    });
  });
});
