import {useDispatch, useSelector} from "react-redux";
import "./TodoList.css"
import {useState, useEffect} from 'react';
import {fetchTodos} from "../../moduls/slice/todo.js";

export function TodoList(props) {
    const dispatch = useDispatch();
    const [tasks, setTasks] = useState([]);
    const todo = useSelector(state => state.todo)

    useEffect(() => {
        dispatch(fetchTodos()).then(() => {
            setTasks(todo.todos);
        });
    }, []);

    function changeStatus(taskId, completedTask) {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return {...task, completed: completedTask};
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    return (
        <div>
            <h1>TodoList</h1>
            <div className={"todo-list"}>
                {!tasks.loading && tasks.length ? (

                    tasks.map(e => {
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
                            </li>
                        )
                    })) : null}
            </div>
        </div>
    );
}
