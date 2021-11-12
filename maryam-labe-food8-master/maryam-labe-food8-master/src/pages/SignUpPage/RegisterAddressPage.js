import React, {useState} from "react"
import useForm from '../../hooks/useForm';
import Back from '../../assets/back.png'
import { useHistory } from "react-router";
import {PageContainer, ButtonContainer, TextStyle, BackButton} from './styled'
import { TextField, Button } from "@material-ui/core";
import axios from 'axios';
import { BASE_URL } from '../../constants/urls'
import { goToHome, goToSearch } from "../../routes/cordinator";
import HeaderBack from "../../components/HeaderBack";
import useUnprotectedPage from "../../hooks/useUnprotectedPage"
import CircularProgress from "@material-ui/core/CircularProgress"

const RegisterAddressPage = () =>{
  useUnprotectedPage()
  const [form, onChange, clear] = useForm({street: '', number: '', neighbourhood: '', city: '', state: '', complement: ''});
  
  const history = useHistory()

  const [isLoading, setIsLoading]= useState(false)

  const registerAddress = (form, clear, history) =>{
    setIsLoading(true)
    axios.put(`${BASE_URL}/address`, form, {
        headers: {auth: localStorage.getItem("token")}})
        .then((res)=>{
          setIsLoading(false)
            console.log(res)
            localStorage.setItem("token", res.data.token)
            clear()
            goToSearch(history)
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }
        const onSubmitForm = (event) => {
          event.preventDefault()
          registerAddress(form, clear, history)
        }
      
 

    return(
      <PageContainer>
      <HeaderBack />
      <TextStyle> Address </TextStyle>
      <form onSubmit={onSubmitForm}>
      <TextField
        type={"text"}
        name={"street"}
        value={form.street}
        onChange={onChange}
        placeholder="Endereço"
        required
        label={"street"}
        variant={"outlined"}
        margin={"normal"}
        fullWidth
      />
      <br/>
      <TextField
        type={"number"}
        placeholder="N°"
        name={"number"}
        value={form.number}
        onChange={onChange}
        required
        label={"number"}
        variant={"outlined"}
        margin={"normal"}
        fullWidth
      />
      <br/>
      <TextField
        type={"text"}
        name={"neighbourhood"}
        value={form.neighbourhood}
        onChange={onChange}
        placeholder="Bairro"
        required
        label={"neighbourhood"}
        variant={"outlined"}
        margin={"normal"}
        fullWidth
      />
      <br/>
      <TextField
        type={"text"}
        name={"city"}
        value={form.city}
        onChange={onChange}
        placeholder="Cidade"
        required
        label={"city"}
        variant={"outlined"}
        margin={"normal"}
        fullWidth
      />
      <br/>
      <TextField
        type={"text"}
        name={"state"}
        value={form.state}
        onChange={onChange}
        placeholder="Estado"
        required
        label={"state"}
        variant={"outlined"}
        margin={"normal"}
        fullWidth
      />
      <br/>
      <TextField
        type={"text"}
        name={"complement"}
        value={form.complement}
        onChange={onChange}
        placeholder="Complemento"
        required
        label={"complement"}
        variant={"outlined"}
        margin={"normal"}
        fullWidth
      />
      <br/>     
      <br/>          
      <ButtonContainer
        variant={'contained'}
        type={"submit"}

        onClick={() => goToSearch(history)}
        fullWidth> {isLoading? <CircularProgress color={'inherit'} size={24}/> : <>Salve</>} </ButtonContainer>


      </form>
    </PageContainer>
    )
}
export default RegisterAddressPage