import React, { useEffect, useState, useContext } from "react";
import saida from '../../assets/saida.png'
import perfil from '../../assets/perfil.png'
import {Header,BackButton, Img, ButtonProfile, ImgProfile} from "./styled"
import {GlobalStateContext} from "../../Global/GlobalStateContext"
import { useHistory } from "react-router";
import axios from "axios";
import useProtectedPage from '../../hooks/useProtectedPage'
import HomePageCard from "../HomePage/HomePageCard"
import {goToRestaurant, goToLogin, goToProfile} from "../../routes/cordinator"
import FooterMenu from "../../components/FooterMenu";
import styled from 'styled-components'
import { TextField, Button } from "@material-ui/core";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vW;

`
const TitleBox = styled.div`
    height: 6vh;
    margin: 0 0 1px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 var(--black-25);
    background-color: #fff;
    border-bottom: 1x solid gray;
    justify-content: center;
`
const Title = styled.h1`
    font-family: Roboto-Regular;
    font-size: 16px;
    text-align: center;
    justify-content: center;
    color: var(--gray);
    margin-top: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 88vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 20px;
`

const HomeContainer = styled.div`
    p{

    }
`

const HomePage = () => {
     useProtectedPage()
    const history = useHistory()
    const {states, seters} = useContext(GlobalStateContext)
   const token = localStorage.getItem("token")
    const [restaurants, setRestaurants] = useState ([])
    const [search, setSearch] = useState("")
    const headers = {
                headers:{auth: ('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkcyWGVVUjFlMXI1YUxmMzhDRmxNIiwibmFtZSI6Ikx1aWdpIiwiZW1haWwiOiJsdWlnaV9yaWJlaXJvQGxpdmUuY29tIiwiY3BmIjoiMTQ0LjI3OS45NjctNjAiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gUXVhdHJvLCA4NywgNzEgLSBWaWxhIE4uIENvbmNlacOnw6NvIiwiaWF0IjoxNjM2MDM2OTkxfQ.cBIwxNvV8RctZ1Cohs-iCvW8YulBeKM5KZBhQkeDMXI')}
        }
    const listRestaurant = () => {
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsC/restaurants`, headers)
        .then((res)=>{
            setRestaurants (res.data.restaurants)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(()=>{
        listRestaurant()
    }, [])

    const onClickCard = (id) =>{
        goToRestaurant(history, id)
    }
    const restaurantsCards = restaurants.map((restaurant)=>{
        return (
                <HomePageCard
                key={restaurant.id}
                title ={restaurant.name}
                image ={restaurant.logoUrl}
                time={restaurant.deliveryTime}
                frete={restaurant.shipping}
                onClick={() => onClickCard (restaurant.id)}
                />
            )
        })


  const logout = () =>{
    localStorage.removeItem("token")
  }

  const rightButtonAction = () =>{
    if(token){
      logout()
      seters.setRightButtonText("")
      goToLogin(history)
    }else{
      goToLogin(history)
    }
  }
    return(
        <HomeContainer>

            <TitleBox>
            <Title>FutureEats</Title>
            </TitleBox>

            <InputsContainer>
                <TextField 
                placeholder="Restaurante"
                type="text"
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                // value={null}
                onChange={(e)=> setSearch((e.target.value))}/>
            </InputsContainer>

            {restaurantsCards}
            <FooterMenu />
        </HomeContainer>
    )
}
export default HomePage