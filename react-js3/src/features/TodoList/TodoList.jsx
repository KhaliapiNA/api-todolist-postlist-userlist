import {useDispatch, useSelector} from "react-redux";
import "./TodoList.css"
import {useState, useEffect} from 'react';
import {todo, fetchTodos} from "../../moduls/slice/todo.js";

export function TodoList(props) {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    useEffect(() => {
        dispatch(fetchTodos(),
            [dispatch])
    });

    function changeStatus(dataId, isDone) {
        let d = data.find(e => e.id === dataId);
        if (d) {
            d.isDone = !d.isDone;
        }
        setData([]);
    }

    return (
        <div>
            <h1>TodoList</h1>
            <div className={"todo-list"}>
                {!state.todo.data ? null : state.todo.data.map((e) =>
                    <li key={e.id}>
                        <input type={"checkbox"}
                               checked={e.completed}
                               onChange={(event) => changeStatus(e.id, event.currentTarget.checked)}
                               className={"radio"}/>
                        {e.title}
                    </li>
                )}
            </div>
        </div>
    )
        ;
}