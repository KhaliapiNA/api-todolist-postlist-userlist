import './PostList.css';
import {useSelector} from "react-redux";

export function PostList() {
    const state = useSelector((state) => state)
    return (
        <div className={"post-list-page"}>
            <h1>Post</h1>
            <div className={"post-list"}>
                {!state.post.data ? null : state.post.data.map((e) =>
                    <div className={"posts"}>
                        <div className={"flex"}>
                            <div className={"user-id-box"}>
                                <span>UserId: </span>
                                <p className={"user-id"}> {e.userId}</p>
                            </div>
                            <div className={"post-title-box"}>
                                <span>Title: </span>
                                <p className={"post-title"}>{e.title}</p>
                            </div>
                        </div>
                        <div className={"text-body-box"}>
                            <span>Text: </span>
                            <p class={"post-body"}> {e.body}</p>
                        </div>
                    </div>)}
            </div>
        </div>
    );
}