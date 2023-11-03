import {useDispatch, useSelector} from "react-redux";
import "./TodoList.css"
import {useState, useEffect} from 'react';
import {todo, fetchTodos} from "../../moduls/slice/todo.js";

export function TodoList(props: any) {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    useEffect(() => {
        dispatch(fetchTodos(),
            [dispatch])
    });
    const toggleComplete = id => {
        setData(data.map(e => e.id === id ? {e, completed: !e.completed} : e))
    }
    return (
        <div>
            <h1>TodoList</h1>
            <div className={"todo-list"}>
                {!state.todo.data ? null : state.todo.data.map((e) =>
                    <li>
                        <input key={e.id} type={"radio"}
                               checked={e.completed}
                               onChange={() => toggleComplete(e.id)}
                               className={"radio"}/>{e.title}
                    </li>)}
            </div>
        </div>
    );
}