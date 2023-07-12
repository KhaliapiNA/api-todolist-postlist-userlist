import {useSelector} from "react-redux";
import "./UserList.css"
export function UserList() {
    const state = useSelector((state) => state);
    return(
        <div className={"user-list"}>
            <h1>UserList</h1>
            {!state.users.data ? null : state.users.data.map((e) =>
                <div className={"user-list-box"}>
                    <p className={"user-list-name"}>{e.name}</p>
                    <p className={"user-list-username"}>{e.username}</p>
                </div>)}
        </div>
    );
}