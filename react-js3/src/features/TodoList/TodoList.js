import {useDispatch, useSelector} from "react-redux";
import "./TodoList.css"
import React, {useState, useEffect} from 'react';
import {fetchTodos, toggleComplete} from "../../moduls/slice/todo.js";
import {TodoItem} from "./TodoItem/TodoItem";

export function TodoList(props) {

    return (
        <div>
            <h1>TodoList</h1>
            <div className={"todo-list"}>
                <TodoItem/>
            </div>
        </div>
    );
}