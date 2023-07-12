import './PostList.css';
import {useSelector} from "react-redux";

export function PostList() {
    const state = useSelector((state) => state)
    return (
        <div className={"post-list"}>
            <h1>Post</h1>
                {!state.post.data ? null : state.post.data.map((e) =>
                    <div className={"posts"}>
                        <label>UserId: {e.userId}</label>
                        <p className={"post-title"}>Title: {e.title}</p>
                        <p class={"post-body"}>Text: {e.body}</p>
                    </div>)}
        </div>
    );
}