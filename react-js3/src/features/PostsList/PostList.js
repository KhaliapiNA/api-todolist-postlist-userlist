import './PostList.css';
import {useSelector} from "react-redux";

export function PostList() {
    const state = useSelector((state) => state)
    return (
        <div className={"post-list"}>
            <h1>Post</h1>
                {!state.post.data ? null : state.post.data.map((e) =>
                    <div className={"posts"}>
                        <label>{e.userId}</label>
                        <p>{e.title}</p>
                        <p>{e.body}</p>
                    </div>)}
        </div>
    );
}