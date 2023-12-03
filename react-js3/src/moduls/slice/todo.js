import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    todos: [],
    error: ''
}

export const fetchTodos = createAsyncThunk('todo/fetchTodos', async () => {
    return axios
        .get('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.data.map((todo) => todo))
});

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    extraReducers: (builder) => {

        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.todos = action.payload;

        });

        builder.addCase(fetchTodos.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isError = true;
        })
    }
});

export default todoSlice.reducer;