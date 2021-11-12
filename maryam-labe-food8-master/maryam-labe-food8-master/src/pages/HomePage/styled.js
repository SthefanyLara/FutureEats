import Card from '@material-ui/core/Card'
import styled from "styled-components"
import CardContent from '@material-ui/core/CardContent'
import TextField from '@mui/material/TextField'
import Fab from "@material-ui/core/Fab"

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vW;
`

export const  ListCardContent = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 2vh;
  color:  #5CB646;
`
export const CardContainerRestaurants = styled(Card)`
  width: 50vh;
  margin: 10px;
  align-items: center;
  margin-left: 5%;
  border-radius: 10%;
`
export const TimeR = styled.div`
display: flex;
color:#b8b8b8 ;
margin-left: 1vh;
margin-bottom:1vh;
justify-content: space-between;
margin-right:1vh;
font-size:2vh;
`
export const input = styled.input`
  height: 56px;
`


export const TitleBox = styled.div`

    height: 8vh;
    margin: 0 0 1px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 var(--black-25);
    background-color: #fff;
`


export const Input = styled(TextField)`
  width: 340px;
  height: 56px;
  margin: 8px 0px 0px;
  padding: 19px 38px 19px 16px;
  border-radius: 4px;
  border: solid 1px #b8b8b8;
  color: black;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  font-weight: lighter;
  color: black;
`

export const Title = styled.h3`
width: 84px;
height: 19px;
margin-right: 140px;
font-family: unset;
font-size: 18px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
text-align: center;
color: var(--black);
`
 export const Header = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
width: 100vw;
height: 54px;
margin: 0 0 7px;
border: solid 1px #b8b8b8;
font-family: unset;
`
export const BackButton = styled.button`
background-color: white;
border: 0px white;
cursor: pointer;
font-family: unset;
`

export const Img = styled.img`
width: 25px;
height:25px;
padding: 10px;
`

export const ButtonProfile = styled(Fab)`
    position: fixed !important;
    right: 20px;
    bottom: 20px;
    z-index: 3;
`

export const ImgProfile = styled.img`
width: 30px;
height:30px;
padding: 10px;
`


