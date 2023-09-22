import {useDispatch, useSelector} from "react-redux";
import "./TodoItem.css"
import React, {useState, useEffect} from 'react';
import {fetchTodos, toggleComplete} from "../../moduls/slice/todo.js";
export function TodoItem({userId, completed}) {

    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    const  handleCompleteClick = ()=>{
        dispatch(
            toggleComplete({userId: userId, completed: !completed})
        );
    };
    return (
        <div>
            {!state.todo.data ? null : state.todo.data.map((e) =>
                <li>
                    <input key={e.userId} type={"radio"}
                           onChange={handleCompleteClick}
                           className={"radio"}/>
                    {e.title}
                </li>)}
        </div>
    )}