import {useDispatch, useSelector} from "react-redux";
import "./TodoList.css"
import React, {useState, useEffect} from 'react';
import {fetchTodos,updateCheckbox} from "../../moduls/slice/todo.js";

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
    const handleCheckboxChange = async (id, completed) => {
        try {
            await updateCheckbox(id, completed);

            setData((prevCheckboxes) =>
                prevCheckboxes.map((checkbox) =>
                    checkbox.userId === id ? { ...checkbox,  completed} : checkbox
                )
            );
        } catch (error) {
        }
    };
    return (
        <div>
            <h1>TodoList</h1>
            <div className={"todo-list"}>
                {!state.todo.data ? null : state.todo.data.map((e) =>
                    <li>
                        <input key={e.userId} type={"checkbox"}

                               checked={e.completed}
                               onChange={(event) => handleCheckboxChange(e.userId, event.target.checked)}
                               className={"radio"}/>
                        {e.title}
                    </li>)}
            </div>
        </div>
    );
}