import * as actions from './current-user';
import feDataMock from '../pretender/fe-data.data';
import UserModel from '../models/user-model';
import * as currentUserUtilMock from '../util/current-user';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

jest.mock('../util/current-user.js');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loadCurrentUserData', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should dispatch proper actions and call proper functions if api returns error', () => {
    const errorPayload = { error: 'fail!' };
    window.console = { error: jest.fn() };
    currentUserUtilMock.getCurrentUserData.mockRejectedValue(errorPayload);

    const expectedActions = [
      { type: actions.FETCH_CURRENT_USER },
      { type: actions.CURRENT_USER_FETCH_ERROR, payload: errorPayload }
    ];
    const store = mockStore({});

    return store.dispatch(actions.loadCurrentUserData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      expect(currentUserUtilMock.checkSignedIn).toHaveBeenCalledTimes(0);
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
      { type: actions.FETCH_CURRENT_USER },
      { type: actions.UPDATE_CURRENT_USER, payload: new UserModel(feDataMock) }
    ];
    const store = mockStore({});

    return store.dispatch(actions.loadCurrentUserData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      expect(currentUserUtilMock.checkSignedIn).toHaveBeenCalledTimes(1);
      expect(currentUserUtilMock.checkHasFeature).toHaveBeenCalledTimes(1);
      expect(currentUserUtilMock.redirectToSignIn).toHaveBeenCalledTimes(0);
    });
  });
});
