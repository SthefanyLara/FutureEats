import styled from 'styled-components'

export const ContainerDiv = styled.div`
display:flex;
width: 348px;
flex: 0 1 auto;
height: 112px;
margin: 10px 4px 4px 13px;
border-radius: 8px;
border: solid 1px #b8b8b8;
// font-family: Roboto;
font-family: unset;
`
export const ButtonStyle = styled.button`
width: 74px;
height: 34px;
display: flex;
justify-item: center;
justify-content: center;
margin: 0px 0px 0px 20px;
padding: 8px 20.5px 9px 21.5px;
border-radius: 8px 0px;
border: solid 1px #5cb646;
float: right;
cursor: pointer;
background-color: white;
// font-family: Roboto;
font-family: unset;
color: #5cb646;
`
export const RedButtonStyle = styled.button`
width: 74px;
height: 34px;
display: flex;
justify-item: center;
justify-content: center;
margin: 0px 0px 0px 20px;
padding: 8px 20.5px 9px 21.5px;
border-radius: 8px 0px;
border: solid 1px #e02020;
float: right;
cursor: pointer;
background-color: white;
// font-family: Roboto;
font-family: unset;
color: #e02020;
`
export const CountButtonStyle = styled.button`
width: 33px;
height: 33.5px;
display: flex;
justify-item: center;
justify-content: center;
margin: 0px 0px 0px 25px;
padding: 8px 20.5px 9px 21.5px;
border-radius: 0px 8px;
border: solid 1px #5cb646;
float: right;
cursor: pointer;
background-color: white;
// font-family: Roboto;
font-family: unset;
color: #5cb646;
`

export const NameItem = styled.h2`
width: 167px;
height: 18px;
// margin: 18px 49px 8px 16px;
// font-family: Roboto;
font-family: unset;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #5cb646;
`
export const DescriptionItem = styled.p`
width: 200px;
height: 30px;
// margin: 8px 16px 4px;
margin-top: 16px;
// font-family: Roboto;
font-family: unset;
font-size: 12px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.29px;
color: #b8b8b8;
`
export const Price = styled.p`
width: 118px;
height: 19px;
margin: 4px 8px 15px 16px;
// font-family: Roboto;
font-family: unset;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: var(--black);
`
export const ProductImage = styled.img`
// display:flex;
float: left;
width: 96px;
height: 112px;
margin: 0 16px 0 0;
object-fit: contain;
`
export const DivSize = styled.div`
height: 20px;
display: flex;
// width: 50px;
margin: 0;
padding: 0;
` 