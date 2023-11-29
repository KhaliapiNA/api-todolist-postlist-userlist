import {useDispatch, useSelector} from "react-redux";
import "./TodoList.css"
import {useState, useEffect} from 'react';
import {fetchTodos} from "../../moduls/slice/todo.js";
import { connect } from 'react-redux';

export function TodoList(props) {

    const [tasks, setTasks] = useState([]);
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    useEffect(() => {
        dispatch(setTasks(fetchTodos()),
            [dispatch])
    });

    function changeStatus(dataId, isDone) {
        let task = tasks.payload.find(e => e.id === dataId);
        if (task) {
            task.completed = isDone;
        }
        setTasks([...tasks]);

    }



    const handleCompleteClick = () => {
       /* dispatch(setTasks({
                id: state.todo.id,
                completed: !state.todo.completed
            })
        );*/
        console.log(tasks)
    };


    return (
        <div>
            <h1>TodoList</h1>
            <div className={"todo-list"}>
                {!tasks.payload ? null : tasks.payload.map((e) => {
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
