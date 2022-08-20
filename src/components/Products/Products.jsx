import React from "react";
import { Grid, } from "@mui/material";
import Product from "./Product/Product";
import { makeStyles } from '@mui/styles';

const products = [
 {id: 1, name: 'Nike Shoes', description: 'Runing Shoes', price: '$100', image: 'https://i8.amplience.net/t/jpl/jdfi_product_list?plu=jd_131907_bl&qlt=85&exclusive=0&qlt=92&wid=363&hei=363&v=1&fmt=auto'},
 {id: 2, name: 'Adidas Shoes', description: 'Runing Shoes', price: '$95', image: 'https://i8.amplience.net/t/jpl/jdfi_product_list?plu=jd_118770_bl&qlt=85&exclusive=0&qlt=92&wid=363&hei=363&v=1&fmt=auto'},
 {id: 3, name: 'Jordan Shoes', description: 'Runing Shoes', price: '$90', image: 'https://i8.amplience.net/t/jpl/jdfi_product_list?plu=jd_505064_bl&qlt=85&qlt=92&w=363&h=363&v=1&fmt=auto'},
 {id: 4, name: 'Under Armour', description: 'Runing Shoes', price: '$85', image: 'https://i8.amplience.net/t/jpl/jdfi_product_list?plu=jd_507624_bl&qlt=85&qlt=92&w=363&h=363&v=1&fmt=auto'},
 {id: 5, name: 'Reebok', description: 'Runing Shoes', price: '$80', image: 'https://i8.amplience.net/t/jpl/jdfi_product_list?plu=jd_507384_bl&qlt=85&qlt=92&w=363&h=363&v=1&fmt=auto'},
 {id: 6, name: 'Converse', description: 'Runing Shoes', price: '$85', image: 'https://i8.amplience.net/t/jpl/jdfi_product_list?plu=jd_087768_bl&qlt=85&qlt=92&w=363&h=363&v=1&fmt=auto'},
 {id: 7, name: 'New Balance', description: 'Runing Shoes', price: '$105', image: 'https://i8.amplience.net/t/jpl/jdfi_product_list?plu=jd_556904_bl&qlt=85&qlt=92&w=363&h=363&v=1&fmt=auto'},
 {id: 8, name: 'Tommy', description: 'Runing Shoes', price: '$125', image: 'https://i8.amplience.net/t/jpl/jdfi_product_list?plu=jd_515039_bl&qlt=85&exclusive=0&qlt=92&wid=363&hei=363&v=1&fmt=auto'},
]

const useStyle = makeStyles({
  toolbar: {
    marginTop: '150px'
  }
})

export default function Products() {
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