import './PostList.css';
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from 'react';
import {fetchPosts} from "../../moduls/slice/postlist";

export function PostList() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
      useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
    return (
        <div className={"post-list-page"}>
            <h1>Post</h1>
                <div className={"post-list"}>
                    {!state.post.data ? null :state.post.data.map((e) =>
                        <div className={"posts"}>
                            <div className={"flex"}>
                                <div className={"user-id-box"}>
                                    <span>UserId: </span>
                                    <p key={e.id} className={"user-id"}> {e.userId}</p>
                                </div>
                                <div className={"post-title-box"}>
                                    <span>Title: </span>
                                    <p key={e.id} className={"post-title"}>{e.title}</p>
                                </div>
                            </div>
                            <div className={"text-body-box"}>
                                <span>Text: </span>
                                <p key={e.id} className={"post-body"}> {e.body}</p>
                            </div>
                        </div>)}
                </div>

        </div>
    );
}
