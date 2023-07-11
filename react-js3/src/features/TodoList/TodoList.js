import {useDispatch, useSelector} from "react-redux";
import {fetchTodos} from "../../redux/slice/todo";
import "./TodoList.css"
export function TodoList(props) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    console.log("State", state)
    return(
        <div>
            <h1>TodoList</h1>
            <div>

                {/*{state.todo.map()}*/}
            </div>
        </div>
    );
}