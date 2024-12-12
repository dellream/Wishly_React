/* eslint-disable import/no-unused-modules */

import type {TypedUseSelectorHook} from 'react-redux';
import {useDispatch, useSelector} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {combineReducers, configureStore} from '@reduxjs/toolkit';

import rootSaga from './sagas';
import reducers from "actions/index";

const rootReducer = combineReducers( reducers );


export const setupStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({thunk: false, serializableCheck: false}).concat(sagaMiddleware),
    });

    sagaMiddleware.run(rootSaga);

    return store;
};

const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
