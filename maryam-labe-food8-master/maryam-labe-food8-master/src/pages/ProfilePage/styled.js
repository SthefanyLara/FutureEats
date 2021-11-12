import styled from 'styled-components'

// Estilização Header 

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


// Estilização HistoryOrder

export const HistricoDePedidos = styled.div`
    width: 328px;
    height: 18px;
    margin: 20px 16px 8px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: black;
` 
  export const PathCopy= styled.div`
    width: 310px;
    height: 1px;
    margin: 0 16px 16px;
    border: solid 1px black;
  `
  export const HistoryCard = styled.div`
   width: 300px;
  height: 102px;
  margin: 7px 6px 0;
  padding: 16px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin-left: 20px;
  `

export const Text = styled.div`
    width: 296px;
  height: 18px;
  opacity: 0.89;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: black;
`

export const FontName = styled.div`
  width: 296px;
  height: 18px;
  margin: 0 0 20px;
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;
`

export const FontData = styled.div`
    width: 296px;
  height: 18px;
  margin: 9px 0 20px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: black;
`

export const FontPrice = styled.div`
  width: 296px;
  height: 18px;
  margin: 7px 0 0;
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: black;
`

// Estilização GetAddress
    
export const Address = styled.div` 
 display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vW;
  height: 100px;
  padding-top: 10px;
  margin-bottom: 40px;
  background-color: #eee;
`

export const EnderecoCad = styled.div`
 width: 328px;
height: 18px;
margin: 0 0 8px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #b8b8b8;
`

export const InforEnd = styled.div`
width: 328px;
  height: 18px;
  margin: 8px 0 0;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: black;
`

export const Img = styled.img`
  width: 24px;
  height: 20px;
  margin: 0px 0 10px 300px;
  object-fit: contain;
  cursor: pointer;
`
// Estilização GetProfile

export const Profiles = styled.div`
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: black;
  margin: 8px 0 0;
  
`
export const PerfilContainer = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vW;
  height: 100px;
  padding-top: 10px;
  margin-bottom: 15px;
  margin-top:20px;
  background-color: #5cb646;
`
