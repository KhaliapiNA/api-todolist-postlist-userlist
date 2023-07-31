import {configureStore} from "@reduxjs/toolkit";
import todoReduser from './slice/todo';
import postsReduser from './slice/postlist';
import userReduser from './slice/userlist'
export const store = configureStore(
    {
        reducer: {
            todo: todoReduser,
            post: postsReduser,
            users: userReduser
        }
    }
);