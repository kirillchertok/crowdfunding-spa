import { combineReducers, configureStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';

import { authApi } from '@/api/authApi';
import { placesApi } from '@/api/placesApi';
import modalReducer from '@/redux/slices/modalSlice';

const rootReducer = combineReducers({
    modal: modalReducer,

    [authApi.reducerPath]: authApi.reducer,
    [placesApi.reducerPath]: placesApi.reducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['modal'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    'persist/PERSIST',
                    'persist/REHYDRATE',
                    'persist/PAUSE',
                    'persist/PURGE',
                    'persist/REGISTER',
                    'persist/FLUSH',
                ],
            },
        })
            .concat(authApi.middleware)
            .concat(placesApi.middleware),
});

export const persistor = persistStore(store);
