import { combineReducers,configureStore,type Reducer } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { FLUSH,PAUSE,PERSIST,persistReducer,persistStore,PURGE,REGISTER,REHYDRATE } from 'redux-persist';

import { authApi } from '@services/auth/authApi';
import { authSlice } from '@features/auth/authSlice';

/**
 * Définition des reducers
 */
const rootReducer: Reducer = combineReducers({
	auth: authSlice.reducer,
	[authApi.reducerPath]: authApi.reducer
});

/**
 * Définition de la configuration de persistence des reducers
 */
const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth']
};

/**
 * Définition de la persistence des reducers
 */
const persistedReducer = persistReducer(persistConfig,rootReducer);

/**
 * Configuration du store Redux
 */
export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
		}
	}).concat(authApi.middleware)
});

/**
 * Export du store persistant
 */
export const persistor = persistStore(store);

/** Définition de l'état **/
export type RootState = ReturnType<typeof store.getState>;

/** Définiation du dispatcher **/
export type AppDispatch = typeof store.dispatch;