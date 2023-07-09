import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import {HeaderNavigation} from "../shared/components/Header-navigation/Header-navigation";
import {PostList} from "../shared/components/PostsList/PostList";
import {TodoList} from "../shared/components/TodoList/TodoList";
import {UserList} from "../shared/components/UserList/UserList";

function App() {
    return (
        <div className="App">
            <HeaderNavigation/>
            <Routes>
                <Route path={"/postlist"} element={<PostList/>} />
                <Route path={"/todolist"} element={<TodoList/>} />
                <Route path={"/userlist"} element={<UserList/>} />
            </Routes>
        </div>
    );
}

export default App;
