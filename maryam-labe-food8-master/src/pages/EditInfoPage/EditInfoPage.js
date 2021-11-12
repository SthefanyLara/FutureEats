import React, {useState} from 'react'
import useForm from '../../hooks/useForm'
import {BASE_URL} from '../../constants/urls'
import axios from 'axios'
import Back from '../../assets/back.png'
import {goToProfile} from '../../routes/cordinator'
import {useHistory} from "react-router-dom"
import useProtectedPage from '../../hooks/useProtectedPage'
import {EditarCadastro, StyledButton, Input, Rectangle, ContainerButton, Title, BackButton, Header} from './styled'
import CircularProgress from "@material-ui/core/CircularProgress"


const EditInfoPage = () =>{
useProtectedPage()
const history = useHistory()
const [form, onChange, clear] = useForm({name: '', email: '', cpf: ''})
const [isLoading, setIsLoading]= useState(false)

    const updateProfile = () =>{
        setIsLoading(true)
        axios.put(`${BASE_URL}/profile`, form, {
            headers: {auth: localStorage.getItem("token")}})
            .then((res)=>{
                alert("Perfil atualizado com sucesso!")
                clear()
                setIsLoading(false)
            })
            .catch((error)=>{
                alert("Ocorreu um erro inesperado, tente novamente!")
            })
    }

    const mascara = (valor) =>{
  
       if (valor.length <= 14) {
        valor = valor.replace(/\D/g, '')
        valor = valor.replace(/(\d{3})(\d)/, '$1.$2')
        valor = valor.replace(/(\d{3})(\d)/, '$1.$2')
        valor = valor.replace(/(\d{3})(\d{1,2})/, '$1-$2')
        valor = valor.replace(/(-\d{2})\d+?$/, '$1')
      } else if(valor.length > 14){
        valor = valor.replace(/\D/g, '')
        valor = valor.replace(/(\d{3})(\d)/, '$1.$2')
        valor = valor.replace(/(\d{3})(\d)/, '$1.$2')
        valor = valor.replace(/(\d{3})(\d{1,2})/, '$1-$2')
        valor = valor.replace(/(-\d{2})\d+?$/, '$1')
      }
      return valor
    }

    const  onSubmitForm = (event) =>{
        event.preventDefault()
        updateProfile(form)
    }

    return (
        <EditarCadastro>
        <Header>
                <BackButton onClick={() => goToProfile(history)}> <img src = {Back}/></BackButton>
                <Title> Edit Profile</Title>
            </Header>
            <form onSubmit={onSubmitForm}>
                <Rectangle>
               <Input
                    type={"name"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    label="Nome"
                    required
                />
                </Rectangle>

                <Rectangle>
                <Input
                    type={"email"}
                    placeholder="E-mail"
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label="E-mail"
                    required
                />
                </Rectangle>

                <Rectangle>
                <Input

                    type={"text"}
                    name={"cpf"}
                    value={form.cpf}
                    onChange={(event)=> onChange(event, mascara)}
                    label="Cpf"
                    required
                />
                </Rectangle>

                <ContainerButton>
                <StyledButton 
                    type={"submit"}>
                        {isLoading? <CircularProgress color={'inherit'} size={24}/> : <>Salve</>}
                    </StyledButton>
                </ContainerButton>
            </form>
        </EditarCadastro>
    )

}
export default EditInfoPage