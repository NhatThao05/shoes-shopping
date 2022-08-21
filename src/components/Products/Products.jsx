import React from "react";
import { Grid, } from "@mui/material";
import Product from "./Product/Product";
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
  toolbar: {
    marginTop: '150px'
  }
})

export default function Products({products}) {
  const classes = useStyle()
 return (
  <main className={classes.toolbar}>
   <Grid container justify="center" spacing={4}>
     {products.map((product) => (
      <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
       <Product product={product}/>
      </Grid>
     ))}
   </Grid>
 </main>
 )
}