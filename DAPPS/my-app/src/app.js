import React from "react";
import { useState } from "react";
import './style.css';
import Header from "./components/header";
import Page from "./components/page";
import {BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    const [inputText, setInputText] = useState("")
    const [goals, setGoals ] = useState([]);
    const [color, setColor] = useState("blue");
    const [password, setPassword] = useState("");

    console.log(React.version);

    return(
        <div className="App">
            <center>
            <h1 className="headd">
            </h1>
            </center>
            <BrowserRouter>
            <Page password={password} setPassword={setPassword}/>
           <Routes>
               <Route
               path="/home"
               component={() => (
               <Header color={color} setColor={setColor} goals={goals} setGoals={setGoals} inputText={inputText} setInputText={setInputText}
               />
               )}
               />
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;