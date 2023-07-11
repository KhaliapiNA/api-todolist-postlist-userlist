import {Link} from "react-router-dom";
import './Header-navigation.css';
import {useDispatch} from "react-redux";
import {fetchTodos} from "../../../redux/slice/todo";
import {fetchPosts} from "../../../redux/slice/postlist";

export function HeaderNavigation() {
    const dispatch = useDispatch();
    return (
        <header>
            <div className={"header-buttons"}>
            <Link to={"/postlist"} className="header-button" onClick={(e)=>dispatch(fetchPosts())}>PostList</Link>
            <Link to={"/todolist"} className="header-button" onClick={(e)=>dispatch(fetchTodos())}>TodoList</Link>
            <Link to={"/userlist"} className="header-button">UserList</Link>
        </div>
        </header>
    );
}