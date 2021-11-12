import React from 'react'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import {HistricoDePedidos, PathCopy, Text, HistoryCard, FontName, FontData, FontPrice} from './styled'

const conversorMes = (month) =>{
    switch (month) {
        case 1:
            return 'Janeiro'
        case 2:
            return 'Fevereiro'
        case 3:
            return 'Março'
        case 4:
            return 'Abril'
        case 5:
            return 'Maio'
        case 6:
            return 'Junho'
        case 7:
            return 'Julho'
        case 8:
            return 'Agosto'
        case 9:
            return 'Setembro'
        case 10:
            return 'Outubro'
        case 11:
            return 'Novembro'
        case 12:
            return 'Dezembro'
        default:
            return 'Error'
        }
    }


const HistoryProfile = () =>{

    const historyOrder  = useRequestData([], `${BASE_URL}/orders/history`)[0]

    const conversorDate = (dateOfOrder) => {
        const date = new Date(dateOfOrder)
            return `${date.getDate()} de ${conversorMes(date.getMonth() + 1)} de ${date.getFullYear()}`
    }

    const history = historyOrder.orders?.map((order, index)=>{
        const date = conversorDate(order.createdAt)
        return ( <HistoryCard key={index}>
              <FontName id={'nameRestaurant'}> {order.restaurantName}</FontName>
             <FontData id={'date'}>{date}</FontData>
             <FontPrice id={'subtotal'}>SUBTOTAL:  R${order.totalPrice.toFixed(2).replace('.', ',')}</FontPrice>
            </HistoryCard>

        )
    })


    return (
        <div>
            <HistricoDePedidos>
           <h4> Histórico de pedidos</h4>
            </HistricoDePedidos>
            <PathCopy></PathCopy>
            {historyOrder.orders ? <div>{history}</div> 
            :
            <Text>Você não realizou nenhum pedido</Text>
            }
        </div>
    )
}
export default HistoryProfile

{/* <HistoryCard>
             <FontName>{historyOrder.orders && historyOrder.orders[0].restaurantName}</FontName>
             <FontData>{historyOrder.orders && historyOrder.orders[0].createdAt}</FontData>
             <FontPrice>SUBTOTAL  R${historyOrder.orders && historyOrder.orders[0].totalPrice}</FontPrice>
            </HistoryCard> : */}