import {useSelector} from "react-redux";
import "./UserList.css"
export function UserList() {
    const state = useSelector((state) => state);
    return(
        <div>
            <h1>UserList</h1>
            {!state.users.data ? null : state.users.data.map((e) =>
                <div className={"posts"}>
                    <p>{e.name}</p>
                    <p>{e.username}</p>
                </div>)}
        </div>
    );
}