import './PostList.css';
import {useDispatch, useSelector} from "react-redux";
import React, {useState, useEffect} from 'react';
import {fetchPosts} from "../../redux/slice/postlist";

export function PostList() {
    /*const dispatch = useDispatch();
    const data = useSelector(state => state.data);
      useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
    return (
        <div className={"post-list-page"}>
            <h1>Post</h1>
            {data && (
                <div className={"post-list"}>
                    {data.map((e) =>
                        <div className={"posts"}>
                            <div className={"flex"}>
                                <div className={"user-id-box"}>
                                    <span>UserId: </span>
                                    <p key={e.userId} className={"user-id"}> {e.userId}</p>
                                </div>
                                <div className={"post-title-box"}>
                                    <span>Title: </span>
                                    <p key={e.userId} className={"post-title"}>{e.title}</p>
                                </div>
                            </div>
                            <div className={"text-body-box"}>
                                <span>Text: </span>
                                <p key={e.userId} class={"post-body"}> {e.body}</p>
                            </div>
                        </div>)}
                </div>
            )}
        </div>
    );
}*/
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {data && (
                <ul>
                    {data.map((item) => (
                        <li  key={item.id}>{console.log(item.name)}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};