import thunk from 'redux-thunk';
import {
  applyMiddleware, compose, createStore, combineReducers
} from 'redux';
import feData from './features/fe-data/reducer';

const allReducers = combineReducers({
  feData
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
