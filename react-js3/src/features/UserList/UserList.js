import "./UserList.css"
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from 'react';
import {fetchUsers} from "../../moduls/slice/userlist";

export function UserList() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
    return(
        <div className={"user-list"}>
            <h1>UserList</h1>
            {!state.users.data ? null : state.users.data.map((e) =>
                <div className={"user-list-box"}>
                    <p key={e.userId} className={"user-list-name"}>{e.name}</p>
                    <p key={e.userId} className={"user-list-username"}>{e.username}</p>
                </div>)}
        </div>
    );
}