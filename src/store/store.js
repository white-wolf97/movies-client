import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const composeEnhancers =
	(typeof window !== 'undefined' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const reducers = combineReducers({
	auth: authReducer,
	ui: uiReducer,
});

const persistConfig = {
	key: 'root',
	storage,
	stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer(persistConfig, reducers);

// export const store = createStore(
// 	reducers,
// 	composeEnhancers(applyMiddleware(thunk))
// );


let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
let persistor = persistStore(store);

export { store, persistor }