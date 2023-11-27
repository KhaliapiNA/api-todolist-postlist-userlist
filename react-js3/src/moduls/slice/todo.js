import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return response.json();
});

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        data: null,
        isError: false
    },
    extraReducers: (builder) => {

        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.data = action.payload;

        });

        builder.addCase(fetchTodos.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isError = true;
        })
    },
    /*changeStatus: (state, dataId, isDone) => {

        let d = state.data.find(e => e.id === dataId);
        if (d) {
            d.isDone = isDone;
        }
    }*/
});

export default todoSlice.reducer;