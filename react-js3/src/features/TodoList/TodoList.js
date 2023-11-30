import {useDispatch, useSelector} from "react-redux";
import "./TodoList.css"
import {useState, useEffect} from 'react';
import todo, {fetchTodos} from "../../moduls/slice/todo.js";

export function TodoList(props) {
    const [tasks, setTasks] = useState([]);
    const tasksState = tasks.payload;
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    console.log(tasksState)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const jsonData = await dispatch(fetchTodos());
                setTasks(jsonData);
            } catch (error) {
                console.log("error: ", error)
            }
        };
    }, [dispatch]);

    function changeStatus(taskId, taskCompleted) {
        let task = tasksState.find(e => e.id === taskId);
        // if (task) {
        //task.completed === !taskCompleted;
        //}
        //([...tasksState]);


    }

    const handleCompleteClick = () => {
        setTasks(
            Object.defineProperties(...tasksState,
                {
                    id: tasksState.id,
                    completed: !tasksState.completed
                })
        );
    };
    return (
        <div>
            <h1>TodoList</h1>
            <div className={"todo-list"}>
                {!tasksState ? null : tasksState.map((e) => {
                        const handlerOnChange = (event) => {
                            changeStatus(e.id, !event.currentTarget.checked)

                        }
                        return (
                            <li key={e.id}>
                                <input type={"checkbox"}
                                       checked={e.completed}
                                       onChange={handleCompleteClick}
                                       className={"radio"}/>
                                {e.title}
                            </li>)
                    }
                )}
            </div>
        </div>
    );
}
