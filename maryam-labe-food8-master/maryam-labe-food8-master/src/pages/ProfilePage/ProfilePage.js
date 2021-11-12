import React from "react"
import HistoryProfile from "./HistoryProfile"
import GetProfile from './GetProfile'
import GetAddress from './GetAddress'
import saida from '../../assets/saida.png'
import { BackButton, Header, Title} from './styled'
import {useHistory} from "react-router-dom"
import {goToHome} from '../../routes/cordinator'
import Back from '../../assets/back.png'
import useProtectedPage from '../../hooks/useProtectedPage'

const ProfilePage = () =>{
    useProtectedPage()
    const history = useHistory()
    
    return(
        <div>
            <Header>
                <BackButton onClick={() => goToHome(history)}>
                    <img src = {Back}/>
                </BackButton>
                <Title> Profile</Title>
            </Header>
            <GetProfile/>
            <GetAddress/>
            <HistoryProfile/>
        </div>
    )
}

export default ProfilePage