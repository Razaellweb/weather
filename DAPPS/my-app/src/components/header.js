import React from "react";
import { useEffect } from "react";

const Header = ({goals, color, setColor, setGoals, setInputText, inputText}) => {
    useEffect(() => {
        getGoals();
    }, []);
    const Gooal = () => {
        console.log("start");
    };
    const shownum = (e) => {
        e.preventDefault();
        setInputText(inputText);
        const tempData = goals;
        var object =  {
            text: inputText,
            progress: "notdone",
            color: "red",
            key: Math.random() * 10000
        }
        tempData.push(object);
        setGoals(goals);
        saveGoals();

        setInputText("");
        console.log(goals);

    };
    const saveGoals = () => {
        localStorage.setItem("goals", JSON.stringify(goals));
    }
    const getGoals = () => {
        if(localStorage.getItem('goals') === null){
            console.log("worrkkkks")
        }else{
            let goalsset = JSON.parse(localStorage.getItem('goals'))
            console.log(goalsset);
            setGoals(goalsset);
        }
    } 
    const complete = (e) => {
       e.preventDefault();
      // e.target.style.backgroundColor = "green";
       var cd = e.target;
       cd.setAttribute("class", "completed");
       cd.removeAttribute("style");
       console.log(cd);
       console.log(goals);
       saveGoals();
    }
    const delgoal = (e) => {
       var red = e.target;
       var redd = red.getAttribute("value")
       setGoals(goals.filter(el => el.text !== redd))
       saveGoals();
       console.log(goals);
    }
    return(
        <div className="container">    
            <form onSubmit={shownum}>
                <center>
                <fieldset className="img1"></fieldset>
             <input type="text" placeholder="Write text here..." value={inputText} onChange={(e) => setInputText(e.target.value)} className="input"></input>
        <button onClick={shownum} type="submit" className="btn1">Show Number</button>
        </center>
        {goals.length ? (
            <ul>
                {goals.map((value) => {
                    return <li key={value.key} progress={value.progress} style={{backgroundColor:value.color}} onClick={complete} onDoubleClick={delgoal} value={value.text} className={"lists"}>{value.text}
                    </li>
                })}
            </ul>
        ) : Gooal()}
        </form>
        </div>
    )
}

export default Header;