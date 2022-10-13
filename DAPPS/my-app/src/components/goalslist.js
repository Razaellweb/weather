import React from "react";
import Goal from "./goal";

 const Goallist = ({goals, setGoals}) => {
  /*  goals.map((goall)=> {
        const list = (
            <>
            <ul>
                <li>{goall.text}</li>
            </ul>
            </>
        );
       // return list;
    }) */
 return(
    <div className="list">
        <ul>
        <Goal goals={goals} setGoals={setGoals} key={goals.id}/>
        </ul> 
    </div> 
) 
} 

export default Goallist;