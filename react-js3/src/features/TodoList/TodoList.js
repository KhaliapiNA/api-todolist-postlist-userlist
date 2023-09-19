import {useDispatch, useSelector} from "react-redux";
import "./TodoList.css"
import React, {useState, useEffect} from 'react';
import {fetchTodos, updateData} from "../../moduls/slice/todo.js";

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
    const handleUpdate = async (userId, newCompleted) => {
        try {
            await updateData(userId, newCompleted);

            // Обновляем локальное состояние
            setData(prevData =>
                prevData.map(item => (item.userId === userId ? { ...item, completed: newCompleted } : item))
            );
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            <h1>TodoList</h1>
            <div className={"todo-list"}>
                {!state.todo.data ? null : state.todo.data.map((e) =>
                    <li>
                        <input key={e.userId} type={"radio"}
                               checked={e.completed}
                               className={"radio"}/>
                        {e.title}
                    </li>)}
            </div>
        </div>
    );
}