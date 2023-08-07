import "./TodoList.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export function TodoList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])
    return (
        <div>
            <h1>TodoList</h1>
            <div className={"todo-list"}>
                {data.map((e, i) =>
                    <li>
                        <input key={i} type={"radio"} checked={e.completed} className={"radio"}/>{e.title}
                    </li>)}
            </div>
        </div>
    );

}