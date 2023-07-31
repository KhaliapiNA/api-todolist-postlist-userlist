import {Link} from "react-router-dom";
import './Header-navigation.css';
export function HeaderNavigation() {
    return (
        <header>
            <div className={"header-buttons"}>
            <Link to={"/postlist"} className="header-button">PostList</Link>
            <Link to={"/todolist"} className="header-button">TodoList</Link>
            <Link to={"/userlist"} className="header-button">UserList</Link>
        </div>
        </header>
    );
}