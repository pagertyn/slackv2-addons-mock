import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import currentUser from './reducers/current-user';

let allReducers = combineReducers({
  currentUser
});

let allStoreEnhancers = compose(
  applyMiddleware(thunk)
);

// split this to avoid an error when devToolsExtension is null
if (window.devToolsExtension) {
  allStoreEnhancers = compose(allStoreEnhancers, window.devToolsExtension());
}

const store = createStore(allReducers, undefined, allStoreEnhancers);

export default store;
