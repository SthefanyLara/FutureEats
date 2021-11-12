import { useState } from "react";



const UseForm = (initialState) => {

    const [form, setForm] = useState(initialState)

    const handleInputChange = (event, mascara) => {
        const {value, name} = event.target
        if(mascara){
            const valorFormatado = mascara(value)
            setForm({...form, [name]: valorFormatado})
        }else{

            setForm({...form, [name]:value})
        }
    }

    const clear = () => {
        setForm(initialState)
    }

    return[form, handleInputChange, clear]
}

export default UseForm