import "./UserList.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export function UserList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])
    return(
        <div className={"user-list"}>
            <h1>UserList</h1>
            {data.map((e, i) =>
                <div className={"user-list-box"}>
                    <p key={i} className={"user-list-name"}>{e.name}</p>
                    <p key={i} className={"user-list-username"} >{e.username}</p>
                </div>)}
        </div>
    );
}