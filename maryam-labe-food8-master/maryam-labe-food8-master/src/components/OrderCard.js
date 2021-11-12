import React from "react"
import styled from "styled-components"
import clockimg from "../assets/clock.png"

const OrderBox = styled.div`
background-color: #5cb646;
width: 100vw;
height: 18vh;
display: flex;
align-items: center;
padding-left: 6vw;

`
const Clockimg = styled.img`
width: 32px;
height: 32px;
margin-right: 5vw;
`
const OrderInProgress = styled.p`
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #fff;
`
const RestaurantTitle = styled.p`
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: var(--black);
`
const OrderPrice =styled.p`
font-family: Roboto;
font-size: 16px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: var(--black);
`



const OrderCard = () =>
{
    return(
        <OrderBox>
            <Clockimg src={clockimg}/>
            <div>
                <OrderInProgress>Pedido em andamento</OrderInProgress>
                <RestaurantTitle>Bullguer Villa Madalena</RestaurantTitle>
                <OrderPrice>SUBTOTAL R$67,00</OrderPrice>
            </div>

        </OrderBox>
    )
        
}

export default OrderCard