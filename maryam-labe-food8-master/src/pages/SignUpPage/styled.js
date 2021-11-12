import styled from 'styled-components'
import TextField from '@mui/material/TextField'

export const PageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100vW;

`

export const InputContainer = styled.input`
width: 268px;
height: 6px;
margin: 8px 0 0;
padding: 19px 48px 19px 16px;
border-radius: 2px;
border: solid 1px #b8b8b8;

`
export const FormContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 80vW;
margin-bottom: 2vH;
`
export const ButtonContainer = styled.button`
width: 334px;
height: 42px;
padding: 12px 16px;
border-radius: 4px;
background-color: #5cb646;
border-color: #5cb646
margin: 8px 0 0;
`
export const Logo = styled.img`
width: 124px;
height: 78px;
margin: 68px 128px 16px;
object-fit: contain;
// margin-top: 2vH;
margin-top: -1vH;
`
export const TextStyle = styled.p`
width: 296px;
height: 18px;
font-family: Roboto;
font-size: 18px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
text-align: center;
color: black;
margin-top: 2vH;
`
export const ButtonStyle = styled.button`
width: 328px;
  height: 42px;
  padding: 12px 16px;
  border-radius: 2px;
  background-color: #5cb646;
  width: 296px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
`
export const BackButton = styled.button`
    width: 23px;
    height: 24px;
    margin: 10px 321px 0 16px;
    object-fit: contain;
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
