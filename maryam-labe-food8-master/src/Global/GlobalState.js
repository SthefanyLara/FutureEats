import React, {useState} from "react"
import {GlobalStateContext} from "../Global/GlobalStateContext"

const GlobalState = (props) =>{
    const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "")

  const states = {rightButtonText}
  const seters = {setRightButtonText}

    return (
        <GlobalStateContext.Provider
        value={{states, seters}}>
        {props.children}
        </GlobalStateContext.Provider>
           )
}

export default GlobalState 