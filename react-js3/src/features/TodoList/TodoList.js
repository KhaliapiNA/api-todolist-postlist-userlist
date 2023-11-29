import {useDispatch, useSelector} from "react-redux";
import "./TodoList.css"
import {useState, useEffect} from 'react';
import {fetchTodos} from "../../moduls/slice/todo.js";

export function TodoList(props) {

    const [tasks, setTasks] = useState([]);
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    useEffect(() => {
        dispatch(fetchTodos())
            .then(jsonData => {
                setTasks(jsonData);
            });
    }, [dispatch]);
 /*   const  handleComplete = ()=>{
        dispatch(
            toggleComplete({id: state.todo.id, completed: !state.todo.completed})
        );
    };*/



    /*useEffect(() => {
        dispatch(setTasks(fetchTodos()),
            [dispatch])
    });*/

       function changeStatus(taskId) {
           let task = tasks.payload.find(e => e.id === taskId);
           if (task) {
               task.completed = !task.completed;
           }
           setTasks([...tasks]);

       }



    const handleCompleteClick = () => {
        /* dispatch(setTasks({
                 id: state.todo.id,
                 completed: !state.todo.completed
             })
         );*/
        console.log(tasks.payload)
    };


    return (
        <div>
            <h1>TodoList</h1>
            <div className={"todo-list"}>
                {!tasks.payload ? null : tasks.payload.map((e) => {
                        const handlerOnChange = (event) => {
                            console.log(e.id, event.currentTarget.completed)
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
