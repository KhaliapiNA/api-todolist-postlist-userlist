import {Link} from "react-router-dom";
import './Header-navigation.css';

export function HeaderNavigation() {
    return (
        <header>
            <Link to={"/postlist"} className="header-buttons">PostList</Link>
            <Link to={"/todolist"} className="header-buttons">TodoList</Link>
            <Link to={"/userlist"} className="header-buttons">UserList</Link>
        </header>
    );
}