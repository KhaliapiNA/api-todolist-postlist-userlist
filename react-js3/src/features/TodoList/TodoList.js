import {useSelector} from "react-redux";
import "./TodoList.css"

export function TodoList(props) {
    const state = useSelector((state) => state)
    return (
        <div>
            <h1>TodoList</h1>
            <div className={"todo-list"}>
                {!state.todo.data ? null :state.todo.data.map((e) => <li><input type={"radio"} checked={e.completed} className={"radio"}/>{e.title}</li>)}
            </div>
        </div>
    );
}