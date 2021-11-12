import React, { useState, useContext } from "react";
import styled from "styled-components";
import {goToSignUp} from "../../routes/cordinator"
import { useHistory } from "react-router";
import FooterMenu from "../../components/FooterMenu";
import useProtectedPage from '../../hooks/useProtectedPage'
import ProductCard from "../../components/ProductCard/ProductCard";


const CartBox = styled.div`
p{

}
`

const TitleBox = styled.div`

    height: 8vh;
    margin: 0 0 1px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 var(--black-25);
    background-color: #fff;
`
const Title =styled.h1`

    font-family: Roboto;
    font-size: 16px;
    text-align: center;
    justify-content: center;
    color: var(--black);
`
const AdressBox = styled.div`
    width: 100vw;
    height: 10vh;
    margin: 1px 0 8px;
    padding-top: 8px;
    
    background-color: #eee;

`
const AdressTitle = styled.p`
    height: 18px;
    width: 200px;
    margin-left: 5vw;
    margin-top: 0;
    font-family: Roboto;
    font-size: 16px;

    font-stretch: normal;

    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;

`
const Adress = styled.p`
  
  height: 18px;
  margin-left: 5vw;
  font-family: Roboto;
  font-size: 16px;

  font-stretch: normal;

  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
`
const OrderBox=styled.div`
height: 13vh;
padding-left: 5vw;
`
const RestaurantTitle=styled.p`
font-family: Roboto;
font-size: 16px;

font-stretch: normal;

line-height: normal;
letter-spacing: -0.39px;
color: #5cb646;
`
const RestaurantAdress=styled.p`
font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`

const Time = styled.p`
 font-family: Roboto;
  font-size: 16px;

  font-stretch: normal;
  
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`

const CardsContainer=styled.div`

`

const PriceBox = styled.div`
height: 15vh;
display: grid;
grid-template-columns: 5vw 1fr 1fr 1fr 5vw;
grid-template-rows: 1fr 1fr;
`
const Frete = styled.p`
 grid-column-start: 4;
  grid-column-end: 5;
  font-family: Roboto;
  font-size: 16px;
  
  font-stretch: normal;

  line-height: normal;
  letter-spacing: -0.39px;
  text-align: right;
  color: var(--black);

`
const SubTotal = styled.p`
 grid-column-start: 2;
  grid-column-end: 3;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;

  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
`

const Price = styled.p`
grid-column-start: 4;
 grid-column-end: 5;
 font-family: Roboto;
  font-size: 18px;

  font-stretch: normal;

  line-height: normal;
  letter-spacing: -0.43px;
  text-align: right;
  color: #5cb646;
`

const PaymentBox = styled.div`
height: 15vh;
padding-left: 5vw;
` 
const PaymentTittle = styled.p`
font-size: 16px;

  font-stretch: normal;

  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
`
const Line = styled.hr`
    position: relative;
    left: -3vw;
    width: 90vw;
    color: black;
    border-color: black;
`
const PaymentsTypeBox = styled.div`
    
    font-size: 16px;

    font-stretch: normal;

    line-height: normal;
    letter-spacing: -0.39px;
    color: var(--black);

`

const Button = styled.div`
    width: 90vw;
    margin-left: 5vw;
    margin-right: 5vw;
    height: 42px;
    border-radius: 2px;
    background-color: #5cb646;
    p{
        font-family: Roboto;
        font-size: 16px;
    
        font-stretch: normal;
    
        line-height: normal;
        letter-spacing: -0.39px;
        text-align: center;
        
        color: var(--black);
        position: relative;
        top: 12px;

    }
`

const CartPage = () =>{   
    useProtectedPage()  

   const history= useHistory();    
    const [paymentMethod, setPaymentMethod] = useState("");
    const inCartPage=false;
    const handlePaymentChange = (event) => {
        setPaymentMethod(event.target.value);
        console.log(paymentMethod);
    };

    return(
        <CartBox>
            <TitleBox>
            <Title>Meu Carrinho</Title>
            </TitleBox>
            <AdressBox>
                <AdressTitle>Endereço de entrega</AdressTitle>
                <Adress>Rua Alessandro Vieira, 42</Adress>
            </AdressBox>
            <OrderBox>
                <RestaurantTitle>Bullguer Vila Madalena</RestaurantTitle>
                <RestaurantAdress>R. Fradique Coutinho, 1136 - Vila Madalena</RestaurantAdress>
                <Time>30 - 45 min</Time>
            </OrderBox>
            <CardsContainer>
            <ProductCard inCartPage={inCartPage}/>
            
            
            </CardsContainer>
            <PriceBox>
                <Frete>Frete R$ 0,00</Frete>
                <SubTotal>SUBTOTAL</SubTotal>
                <Price>R$00,00</Price>
            </PriceBox>
            <PaymentBox>
                <PaymentTittle>Forma de Pagamento</PaymentTittle>
                <Line/>
                <PaymentsTypeBox
                value={paymentMethod}
                onChange={handlePaymentChange}
                >
                    <input type="radio" name="payment" value ="Money"/> Dinheiro <br/>
                    <input type="radio" name="payment" value ="CreditCard"/> Cartão de crédito<br/> 
                </PaymentsTypeBox>
                
            </PaymentBox>
            <Button onClick= {() => goToSignUp(history)}><p>Confirmar</p></Button>
            <FooterMenu/>
        </CartBox>
    )
}

export default CartPage