import React from "react";
import {link} from "react-router-dom"

const Page = ({password, setPassword}) => {
    return(
      <div className="container2">
          <center>
            <fieldset className="img2"></fieldset>
            <link to="/">
              <form className="form1">
                <input type={"number"} className="input" placeholder="input password"></input>
                <button className="btn3">login</button>
              </form>
            </link>
          </center>
      </div>
    )
}

export default Page;