import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return response.json();
});
export const updateCheckbox = async (userId, completed) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed }),
    });
}
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
    toggleComplete: (state, action) => {
        const index = state.findIndex(
            (todo) => todo.userId === action.payload.userId
        );
        state[index].completed = action.payload.completed;
    }

});

export default todoSlice.reducer;