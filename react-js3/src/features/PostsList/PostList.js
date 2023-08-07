import './PostList.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export function PostList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])
    return (
        <div className={"post-list-page"}>
            <h1>Posts</h1>

            {data.map((e, i) =>
                <div className={"post-list"}>
                    <div className={"posts"}>
                        <div className={"flex"}>
                            <div className={"user-id-box"}>
                                <span>UserId: </span>
                                <p key={i} className={"user-id"}> {e.userId}</p>
                            </div>
                            <div className={"post-title-box"}>
                                <span>Title: </span>
                                <p key={i} className={"post-title"}>{e.title}</p>
                            </div>
                        </div>
                        <div className={"text-body-box"}>
                            <span>Text: </span>
                            <p key={i} class={"post-body"}> {e.body}</p>
                        </div>
                    </div>
                </div>)}
        </div>
    );

}