import React from 'react'
import { BASE_URL } from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData'
import {Profiles, Img, PerfilContainer, InforEnd} from './styled'
import {goToPerfil} from '../../routes/cordinator'
import editor from '../../assets/editor.png'
import {useHistory} from 'react-router-dom'
import useProtectedPage from '../../hooks/useProtectedPage'

const GetAddress = () =>{
     useProtectedPage()
    const history = useHistory()
    const profile = useRequestData([], `${BASE_URL}/profile`)[0]
    
    return (
        <PerfilContainer>
        <Profiles>
            {profile.user && profile.user.name}
            <Img src={editor} alt="lapis para editar" onClick={() =>goToPerfil(history)}/>
        </Profiles>
        <Profiles>
            {profile.user && profile.user.email}
        </Profiles>
        <Profiles>
            {profile.user && profile.user.cpf.replace(/(\d{3})(\d)/, '$1.$2' && (/(\d{3})(\d)/, '$1.$2') && (/(\d{3})(\d{1,2})/, '$1-$2') && (/(-\d{2})\d+?$/, '$1')) }
        </Profiles>
        </PerfilContainer>

    )
}
export default GetAddress