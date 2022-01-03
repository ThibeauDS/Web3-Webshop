import { createSlice } from "@reduxjs/toolkit";

const productenSlice = createSlice({
    name: "producten",
    initialState: [],
    reducers: {
        nieuwProductToevoegen: (state, action) => {
            const { payload } = action;
            return [...state, payload];
        },
        resetProducten: (state, action) => {
            return [];
        },
    },
});

export const { actions, reducer } = productenSlice;
export const { nieuwProductToevoegen, resetProducten } = actions;
