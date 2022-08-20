import React from "react"
import {Card, CardMedia, CardContent, CardActions, Typography} from '@mui/material';
import { AddShoppingCart } from "@mui/icons-material";
import useStyles from './styles';
import IconButton from '@mui/material/IconButton';


export default function Product({product}) {
 const classes = useStyles();
 return (
  <Card className={classes.root}>
   <CardMedia className={classes.media} image={product.image} title={product.name} />
   <CardContent>
    <div className={classes.cardContent}>
     <Typography variant="h5" gutterBottom>
       {product.name}
     </Typography>
     <Typography variant="h5">
       {product.price}
     </Typography>
    </div>
    <Typography variant="body2" color="textSecondary">{product.description}</Typography>
   </CardContent>
   <CardActions disableSpacing className={classes.CardActions}>
    <IconButton aria-label="Add tto Cart">
     <AddShoppingCart />
    </IconButton>
   </CardActions>
  </Card>
 )
}