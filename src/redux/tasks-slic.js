import { createSlice } from "@reduxjs/toolkit";

let tasksSlic = createSlice({
    name: "tasks-slic",
    initialState: { data: [], filterdData: [], item: {}, status: "All", category: "All" },
    reducers: {
        create(state, action) {
            state.data.push(action.payload);
            state.filterdData = state.data;
        },
        read(state, action) {
            state.data = action.payload;
            state.filterdData = state.data;
        },
        update(state, action) {
            let index = state.data.findIndex((element) => element.id == action.payload.id);
            state.data[index] = action.payload;
            state.filterdData = state.data;
            state.item = action.payload;
        },
        delete(state, action) {
            let filterdData = state.data.filter(
                (element) => element.id != action.payload
            );
            state.data = filterdData;
        },
        filterByStatus(state, action) {
            state.status = action.payload;
            if (action.payload != "All") {
                state.filterdData = state.data.filter((element) => element.status == action.payload);
            }
            else {
                state.filterdData = state.data;
            }
        },
        filterByCategory(state, action) {
            state.category = action.payload;
            if (action.payload == "All") {
                state.filterdData = state.data;
            }
            else {
                state.filterdData = state.data.filter((element) => element.categoryId == action.payload);
            }
        },
        search(state, action) {
            if (action.payload != "") {
                state.filterdData = state.data.filter((element) => element.name.includes(action.payload));
            } else {
                state.filterdData = state.data;
            }
        },
        setItem(state, action) {
            state.item = action.payload;
        },
        updateStatus(state, action) {
            // state.item.status = action.payload;
            let index = state.data.findIndex((element) => element.id == action.payload.id);
            state.data[index] = action.payload;
            state.filterdData = state.data;
            state.item = action.payload;
        }
    },
});
export const tasksReducer = tasksSlic.reducer;
export const tasksActions = tasksSlic.actions;
