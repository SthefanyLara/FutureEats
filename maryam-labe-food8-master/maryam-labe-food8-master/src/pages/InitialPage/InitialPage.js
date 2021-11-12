import React from "react"
import useProtectedPage from '../../hooks/useProtectedPage'

const InitialPage = () =>{
    useProtectedPage()
    return(
        <div>
            InitialPage
        </div>
    )
}

export default InitialPage