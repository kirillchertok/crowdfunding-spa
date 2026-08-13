import { combineReducers, configureStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';

import { api } from '@/api/api';
import appReducer from '@/redux/slices/appSlice';

const rootReducer = combineReducers({
    app: appReducer,

    [api.reducerPath]: api.reducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['app'],
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
        }).concat(api.middleware),
});

export const persistor = persistStore(store);
