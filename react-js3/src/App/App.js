import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import {HeaderNavigation} from "../shared/components/Header-navigation/Header-navigation";

function App() {
    return (
        <div className="App">
            <HeaderNavigation/>
            <Routes>
                <Route path={"/"}></Route>
            </Routes>
        </div>
    );
}

export default App;
