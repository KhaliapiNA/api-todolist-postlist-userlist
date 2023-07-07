import {Link} from "react-router-dom";

export function HeaderNavigation() {
    return (
        <div>
            <Link to={"/"}>PostList</Link>
            <Link to={"/todolist"}>TodoList</Link>
            <Link to={"/userlist"}>UserList</Link>
        </div>
    );
}