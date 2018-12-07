import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './current-user';
import feDataMock from '../pretender/fe-data.data';
import UserModel from '../models/user-model';
import * as currentUserUtilMock from '../util/current-user';

jest.mock('../util/current-user.js');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchCurrentUser', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should dispatch proper actions and call proper functions if api returns error', () => {
    const errorPayload = { error: 'fail!' };
    global.console = { error: jest.fn() };
    currentUserUtilMock.getCurrentUserData.mockRejectedValue(errorPayload);

    const expectedActions = [
      { type: actions.FETCH_CURRENT_USER_REQUEST },
      { type: actions.FETCH_CURRENT_USER_ERROR, payload: errorPayload }
    ];
    const store = mockStore({});

    return store.dispatch(actions.fetchCurrentUser()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      expect(currentUserUtilMock.checkSignedInByMetadata).toHaveBeenCalledTimes(1);
      expect(currentUserUtilMock.checkUser).toHaveBeenCalledTimes(0);
      expect(currentUserUtilMock.checkHasFeature).toHaveBeenCalledTimes(0);
      expect(currentUserUtilMock.redirectToSignIn).toHaveBeenCalledTimes(1);
      expect(console.error).toHaveBeenCalledTimes(1);
      expect(console.error).toHaveBeenCalledWith(errorPayload);
    });
  });

  it('should dispatch proper actions and call proper functions if api returns good response', () => {
    currentUserUtilMock.getCurrentUserData.mockResolvedValue({
      data: feDataMock
    });

    const expectedActions = [
      { type: actions.FETCH_CURRENT_USER_REQUEST },
      { type: actions.FETCH_CURRENT_USER_SUCCESS, payload: new UserModel(feDataMock) }
    ];
    const store = mockStore({});

    return store.dispatch(actions.fetchCurrentUser()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      expect(currentUserUtilMock.checkSignedInByMetadata).toHaveBeenCalledTimes(1);
      expect(currentUserUtilMock.checkUser).toHaveBeenCalledTimes(1);
      expect(currentUserUtilMock.checkHasFeature).toHaveBeenCalledTimes(1);
      expect(currentUserUtilMock.redirectToSignIn).toHaveBeenCalledTimes(0);
    });
  });
});
