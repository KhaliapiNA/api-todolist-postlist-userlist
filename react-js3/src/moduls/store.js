import {configureStore} from "@reduxjs/toolkit";
import todoReducer from './slice/todo';
import postsReducer from './slice/postlist';
import userReducer from './slice/userlist'
export const store = configureStore(
    {
        reducer: {
            todo: todoReducer,
            post: postsReducer,
            users: userReducer
        }
    }
);