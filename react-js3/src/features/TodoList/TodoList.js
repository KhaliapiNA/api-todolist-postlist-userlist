import {useDispatch, useSelector} from "react-redux";
import "./TodoList.css"
import React, {useState, useEffect} from 'react';
import {fetchTodos, toggleComplete} from "../../moduls/slice/todo.js";

export function TodoList(props) {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    useEffect(() => {
        dispatch(fetchTodos())
            .then(jsonData => {
            setData(jsonData);
        });
    }, [dispatch]);
    const  handleCompleteClick = ()=>{
        dispatch(
            toggleComplete({userId: state.todo.userId, completed: !state.todo.completed})
        );
    };
    return (
        <div>
            <h1>TodoList</h1>
            <div className={"todo-list"}>
                {!state.todo.data ? null : state.todo.data.map((e) =>
                    <li>
                        <input key={e.userId} type={"radio"}
                               onChange={()=>handleCompleteClick}
                               className={"radio"}/>
                        {e.title}
                    </li>)}
            </div>
        </div>
    );
}