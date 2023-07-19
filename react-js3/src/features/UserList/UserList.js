import {useDispatch, useSelector} from "react-redux";
import "./UserList.css"
import React, { useState, useEffect } from 'react';
import {fetchUsers} from "../../redux/slice/userlist";
export function UserList(props) {
    const [data, setData] = useState(null);
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    return(
        <div className={"user-list"}>
            <h1>UserList</h1>
            {state.users.data && state.users.data.map((e) =>
                (<div className={"user-list-box"}>
                    <p className={"user-list-name"}>{state.users.data.name}</p>
                    <p className={"user-list-username"} >{state.users.data.username}</p>
                </div>))}
        </div>
    );
}