import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { CardContainerRestaurants, ListCardContent, TimeR} from './styled'


const HomePageCard = (props) => {
  return (
    <CardContainerRestaurants onClick={props.onClick}>
      <CardActionArea>
        <CardMedia
          component={'img'}
          alt={props.title}
          height={'170px'}
          image={props.image}
          title={props.title}
        />
        <ListCardContent>
          <Typography align={'center'}>
            {props.title.toUpperCase()}
          </Typography>
        </ListCardContent>
        <TimeR >
           <p> {props.time} min </p>      
           <p> frete R${props.frete.toFixed(2)} </p></TimeR>
      </CardActionArea>
    </CardContainerRestaurants>
  )
}
export default HomePageCard