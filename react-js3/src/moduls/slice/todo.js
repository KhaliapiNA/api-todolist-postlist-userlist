import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return response.json();
});
export const updateCheckbox = async (id, completed) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed }),
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
};
const todoSlice = createSlice({
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

});

export default todoSlice.reducer;