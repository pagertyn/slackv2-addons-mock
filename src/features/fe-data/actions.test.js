import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './actions';
import feDataMock from './mock';
import UserModel from './user/model';
import getFeDataMock from './util';

jest.mock('./util.js');
// jest.spyOn(getFeDataMock);

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchFeData', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should dispatch proper actions and call proper functions if api returns error', () => {
    const errorPayload = { error: 'fail!' };
    global.console = { error: jest.fn() };
    getFeDataMock.mockRejectedValue(errorPayload);

    const expectedActions = [
      { type: actions.FETCH_FE_DATA_REQUEST },
      { type: actions.FETCH_FE_DATA_ERROR, payload: errorPayload }
    ];
    const store = mockStore({});

    return store.dispatch(actions.fetchFeData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      expect(console.error).toHaveBeenCalledTimes(1);
      expect(console.error).toHaveBeenCalledWith(errorPayload);
    });
  });

  it('should dispatch proper actions and call proper functions if api returns good response', () => {
    getFeDataMock.mockResolvedValue({
      data: feDataMock
    });

    const expectedActions = [
      { type: actions.FETCH_FE_DATA_REQUEST },
      {
        type: actions.FETCH_FE_DATA_SUCCESS,
        payload: {
          user: new UserModel(feDataMock),
          account: feDataMock.current_account
        }
      }
    ];
    const store = mockStore({});

    return store.dispatch(actions.fetchFeData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
