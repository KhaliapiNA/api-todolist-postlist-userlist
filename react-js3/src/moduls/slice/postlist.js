import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk('fetchPosts', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
});
const postsSlice = createSlice({
    name: 'post',
    initialState: {
        data: null,
        isError: false
    },
    extraReducers: (builder) => {

        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.data = action.payload;
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isError = true;
        })
    }
});
export default postsSlice.reducer;