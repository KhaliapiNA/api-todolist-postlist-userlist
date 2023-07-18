import {Link} from "react-router-dom";
import './Header-navigation.css';
import {useDispatch} from "react-redux";
import {fetchTodos} from "../../../redux/slice/todo";
import {fetchPosts} from "../../../redux/slice/postlist";
import {fetchUsers} from "../../../redux/slice/userlist";
import { useState } from "react";
export function HeaderNavigation() {
    const [state, setState] = useState(0);
    const dispatch = useDispatch();
    return (
        <header>
            <div className={"header-buttons"}>
            <Link to={"/postlist"} className="header-button">PostList</Link>
            <Link to={"/todolist"} className="header-button">TodoList</Link>
            <Link to={"/userlist"} className="header-button" onClick={(e)=>dispatch(fetchUsers())}>UserList</Link>
        </div>
        </header>
    );
}