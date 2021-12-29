import { createSlice } from "@reduxjs/toolkit";

const productenSlice = createSlice({
    name: "producten",
    initialState: {
        product: [],
    },
    reducers: {
        nieuwProductToevoegen: (state, action) => {
            const { payload } = action;
            return { ...state, product: payload };
        },
    },
});

export const { actions, reducer } = productenSlice;
export const { nieuwProductToevoegen } = actions;
