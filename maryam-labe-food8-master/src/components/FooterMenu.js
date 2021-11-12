import React from "react"
import styled from "styled-components"
import homePageImg from "../assets/homepage.png"
import shoppingCartImg from "../assets/shopping-cart.png"
import avatarImg from "../assets/avatar.png"
import { goToCart, goToHome, goToProfile } from "../routes/cordinator"
import { useHistory } from "react-router"


const FooterBox = styled.div`
width: 100vw;
border-top: 1px solid black;
height: 7vh;
display: flex;


`
const FooterButton = styled.button`
border:0px;
background-color: white;
width: 33.3vw;

`

const FooterMenu = () =>
{
    const history = useHistory();
    return(
    <FooterBox>
        <FooterButton onClick= {()=>goToHome(history)}><img src = {homePageImg}/></FooterButton>
        <FooterButton onClick= {()=>goToCart(history)}><img src = {shoppingCartImg}/></FooterButton>
        <FooterButton onClick= {()=>goToProfile(history)}><img src = {avatarImg}/></FooterButton>
    </FooterBox>
        
    )
        
}

export default FooterMenu