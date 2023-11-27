import {useDispatch, useSelector} from "react-redux";
import "./TodoList.css"
import {useState, useEffect} from 'react';
import todoSlice, {fetchTodos} from "../../moduls/slice/todo.js";
import {store} from "../../moduls/store";
import todo from "../../moduls/slice/todo.js";

export function TodoList(props) {
    const [tasks, setTasks] = useState([]);
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    useEffect(() => {
        dispatch(fetchTodos(),
            [dispatch])
    });

    function changeStatus(dataId, isDone) {
        let d = tasks.find(e => e.id === dataId);
        if (d) {
           d.isDone = isDone;
        }
        setTasks([...tasks]);
        console.log(tasks)
    }


    return (
        <div>
            <h1>TodoList</h1>
            <div className={"todo-list"}>
                {!state.todo.data ? null : state.todo.data.map((e) => {
                    const handlerOnChange = (event) => {
                        changeStatus(e.id, event.currentTarget.checked)
                    }
                        return (
                            <li key={e.id}>
                                <input type={"checkbox"}
                                       checked={e.completed}
                                       onChange={handlerOnChange}
                                       className={"radio"}/>
                                {e.title}
                            </li>)
                    }
                )}
            </div>
        </div>
    );
}