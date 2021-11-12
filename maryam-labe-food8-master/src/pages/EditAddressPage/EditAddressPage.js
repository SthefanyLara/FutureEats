import React, {useState} from 'react'
import useForm from '../../hooks/useForm'
import {BASE_URL} from '../../constants/urls'
import axios from 'axios'
import Back from '../../assets/back.png'
import {useHistory} from "react-router-dom"
import useProtectedPage from '../../hooks/useProtectedPage'
import {EditarCadastro,StyledButton, Rectangle, Input, ContainerButton, Header, BackButton, Title} from './styled'
import CircularProgress from "@material-ui/core/CircularProgress"
import { ButtonContainer, PageContainer, TextStyle } from '../SignUpPage/styled'
import HeaderBack from '../../components/HeaderBack'
import { TextField } from '@material-ui/core'
import { goToHome, goToProfile} from '../../routes/cordinator'



const EditAddressPage = () => {
useProtectedPage()
const history = useHistory()
const [form, onChange, clear] = useForm({street: '', number: '', neighbourhood: '', city: '', state: '', complement: ''})
const [isLoading, setIsLoading]= useState(false)


const addAdress = () =>{
    setIsLoading(true)
    axios.put(`${BASE_URL}/address`, form, {
        headers: {'auth': localStorage.getItem("token")}})
        .then((res)=>{
            alert("Endereço atualizado com sucesso!")
            clear()
            setIsLoading(false)
        })
        .catch((error)=>{
            alert("Ocorreu um erro, tente novamente!")
        })

    }    

    const  onSubmitForm = (event) =>{
    event.preventDefault()
    addAdress(form)
    }

    return (

    <EditarCadastro>
            <Header>
            <BackButton onClick={() => goToProfile(history)}> <img src = {Back}/></BackButton>
            <Title> Edit Address</Title>
            </Header>
        <form onSubmit={onSubmitForm}>
            <Rectangle>
           <Input
                type={"text"}
                name={"street"}
                value={form.street}
                onChange={onChange}
                label="Endereço"
                required
            />
            </Rectangle>

            <Rectangle>
            <Input
                type={"number"}
                label="N°"
                name={"number"}
                value={form.number}
                onChange={onChange}
                required
            />
            </Rectangle>

            <Rectangle>
            <Input 
                type={"text"}
                name={"neighbourhood"}
                value={form.neighbourhood}
                onChange={onChange}
                label="Bairro"
                required
            />
            </Rectangle>

            <Rectangle>
           <Input
                type={"text"}
                name={"city"}
                value={form.city}
                onChange={onChange}
                label="Cidade"
                required
            />
            </Rectangle>

            <Rectangle>
           <Input
                type={"text"}
                name={"state"}
                value={form.state}
                onChange={onChange}
                label="Estado"
                required
            />
            </Rectangle>

            <Rectangle>
           <Input
                type={"text"}
                name={"complement"}
                value={form.complement}
                onChange={onChange}
                label="Complemento"
            />
            </Rectangle>

            <ContainerButton>
            <StyledButton
                type={"submit"}>
                   {isLoading? <CircularProgress color={'inherit'} size={24}/> : <>Salve</>}  </StyledButton>
            </ContainerButton>

        </form>
      </EditarCadastro>
    )

}
export default EditAddressPage