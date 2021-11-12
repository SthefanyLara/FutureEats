import React from 'react'
import { BASE_URL } from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData'
import {Address, EnderecoCad, InforEnd, Img} from'./styled'
import {goToAddress} from '../../routes/cordinator'
import editor from '../../assets/editor.png'
import {useHistory} from 'react-router-dom'
import useProtectedPage from '../../hooks/useProtectedPage'

const GetAddress = () =>{
    const history = useHistory()
    useProtectedPage()
    const address = useRequestData([], `${BASE_URL}/profile/address`)[0]

    return (
        <div>
            <Address>
            <EnderecoCad>
                Endereço Cadastrado
            </EnderecoCad>
            <InforEnd>
            <Img src={editor} alt="lapis para editar" onClick={() =>goToAddress(history)}/>
            </InforEnd>
            <InforEnd>
            {address.address && address.address.street},  {address.address && address.address.number}  -  {address.address && address.address.neighbourhood}
            </InforEnd>
            </Address>
        </div>
    )
}
export default GetAddress