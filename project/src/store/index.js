import { configureStore } from '@reduxjs/toolkit';
import { throttle } from 'lodash';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({});

const loadedStateFromLocalStorage = loadState();

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: loadedStateFromLocalStorage,
});

store.subscribe(
    throttle(() => {
        saveState(store.getState());
    }, 500)
);
