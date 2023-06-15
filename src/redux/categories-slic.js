import { createSlice } from "@reduxjs/toolkit";
let categoriesSlic = createSlice({
    name: "categories-slic",
    initialState: { data: [], category: {} },
    reducers: {
        create(state, action) {
            state.data.push(action.payload);
        },
        read(state, action) {
            state.data = action.payload;
        },
        edit(state, action) { 
            state.category = state.data.find((element) => element.id == action.payload);
        },
        update(state, action) {
            let index = state.data.findIndex((element) => element.id == action.payload.category.id);
            state.data[index] = action.payload.category;
        },
        delete(state, action) {
            let filterdData = state.data.filter(
                (element) => element.id != action.payload
            );
            state.data = filterdData;
        },
    },
});
export const categoriesReducer = categoriesSlic.reducer;
export const categoriesActions = categoriesSlic.actions;
