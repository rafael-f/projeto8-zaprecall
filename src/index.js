import ReactDom from "react-dom";
import React from "react";
import InitialPage from "./components/initialPage/InitialPage";
import "./styles/reset.css";
import "./styles/style.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";
const appHtml = document.getElementById("root");
export default function App() {
    const [activity,setActivity] = React.useState([]);
    const [points, setPoints] = React.useState(0);
    function redActv(type) {
        setActivity(act => [...act,type])
    }
    return (
    <div id="app">
        <InitialPage />
        <Header />
        <Main redActv={redActv} setPoints={setPoints}/>
        <Footer activity={activity} points={points}/>
    </div>
    )
}
ReactDom.render(<App />, appHtml);