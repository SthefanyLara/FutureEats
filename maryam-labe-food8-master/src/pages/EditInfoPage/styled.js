import styled from "styled-components"
import TextField from '@mui/material/TextField'

export const EditarCadastro = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vW;
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

export const Rectangle = styled.div`
    width: 328px;
    height: 56px;
    margin: 8px 0 10px;
    padding-bottom: 5px;
`

export const StyledButton  = styled.button`
  text-align: center;
  padding: 20px 0px 0px 20px;
  width: 296px;
  height: 10px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
  background-color: #5cb646;
  font-weight: lighter;
  border: none;
`

export const ContainerButton = styled.div`
    width: 340px;
    height: 56px;
    margin: 8px 0 10px;
    padding-bottom: 5px;
    border-radius: 4px;
    background-color: #5cb646;
`
export const Title = styled.h3`
width: 84px;
height: 19px;
// font-family: Roboto;
// margin-inline: auto;
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
// margin-bottom: 2px;
border: solid 1px #b8b8b8;
// font-family: Roboto;
font-family: unset;
`
export const BackButton = styled.button`
background-color: white;
border: 0px white;
cursor: pointer;
// font-family: Roboto;
font-family: unset;
`