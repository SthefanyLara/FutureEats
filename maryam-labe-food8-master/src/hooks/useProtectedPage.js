import { useHistory } from "react-router";
import { useLayoutEffect } from "react";
import { goToLogin } from "../routes/cordinator";


const useProtectedPage = () =>
{
    const history = useHistory()

    useLayoutEffect (() =>{
        const token = localStorage.getItem('token')
        if(!token){
            goToLogin(history)
        }
    },[history])
}

export default useProtectedPage