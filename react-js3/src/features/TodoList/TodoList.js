import {useDispatch, useSelector} from "react-redux";
import "./TodoList.css"
import React, {useEffect} from 'react';
import {fetchTodos} from "../../redux/slice/todo.js";

export function TodoList(props) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);
    return (
        <div>
            <h1>TodoList</h1>
            <div className={"todo-list"}>
                {!state.todo.data ? null :state.todo.data.map((e) =>
                    <li>
                        <input key={e.userId} type={"radio"} checked={e.completed} className={"radio"}/>{e.title}
                    </li>)}
            </div>
        </div>
    );
}