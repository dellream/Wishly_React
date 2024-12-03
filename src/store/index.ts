/* eslint-disable import/no-unused-modules */

import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import sagas from './sagas';
import modalsReducer from './reducers/modals';
import uiReducer from './reducers/ui';
import userReducer from './reducers/user';
import alertListReducer from './reducers/alertList';

const rootReducer = combineReducers({
    modals: modalsReducer,
    ui: uiReducer,
    user: userReducer,
    alertList: alertListReducer
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(sagaMiddleware),
        preloadedState
    });

    sagaMiddleware.run(sagas);

    return store;
};

const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
