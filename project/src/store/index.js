import { configureStore } from "@reduxjs/toolkit";
import { throttle } from "lodash";
import { reducer as productenReducer } from "./producten/slice";
import { loadState, saveState } from "./localStorage";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    producten: productenReducer,
});

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
