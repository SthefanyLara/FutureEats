import React from "react"
import styled from "styled-components"
import { goBack, goToLogin } from "../routes/cordinator"
import { useHistory } from "react-router"
import back from '../assets/back.png'
const HeaderBox = styled.div`
width: 100vw;
border-top: 1px solid black;
height: 7vh;
display: flex;
`
const BackButton = styled.button`
    width: 23px;
    height: 24px;
    margin: 10px 321px 0 16px;
    object-fit: contain;
    border: none;
    background-color: #F8F8FF;
`
const HeaderBack = () =>
{
    const history = useHistory();
    return(
    <HeaderBox>
        <BackButton color="inherit" onClick={()=>goBack(history)}><img src={back}/></BackButton>
    </HeaderBox>
    )
}
export default HeaderBack