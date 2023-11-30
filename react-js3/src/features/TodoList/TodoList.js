import {useDispatch, useSelector} from "react-redux";
import "./TodoList.css"
import {useState, useEffect} from 'react';
import todo, {fetchTodos} from "../../moduls/slice/todo.js";

export function TodoList(props) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked); // Toggle the checked state
    };
    const [tasks, setTasks] = useState([]);
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
console.log(tasks)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const jsonData = await dispatch(fetchTodos());
                setTasks(jsonData);
            } catch (error) {
                console.log("error: ", error)
            }
        };
        fetchData();
    }, [dispatch]);

    /*useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch]);*/

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
                        /*const handlerOnChange = (event) => {
                            changeStatus(e.id, event.currentTarget.completed)
                            //console.log(e.id, event.currentTarget.completed)
                        }*/
                        return (
                            <li key={e.id}>
                                <input type={"checkbox"}
                                       checked={e.completed}
                                       onChange={handleCheckboxChange}
                                       className={"radio"}/>
                                {e.title}
                            </li>)
                    }
                )}
            </div>
        </div>
    );
}
