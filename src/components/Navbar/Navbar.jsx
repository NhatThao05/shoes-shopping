import React from "react"
import { Toolbar } from "@mui/material";
import {ShoppingCart} from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { makeStyles } from '@mui/styles';

import Logo from '../../assets/Icon.png'

const useStyle = makeStyles({
 image: {
  marginRight: '10px',
 },
 grow: {
  flexGrow: 1,
 },
 button: {
  width: "50px",
  padding: "5px",
  marginTop: "10px",
  cursor: "pointer",
    transform: "scale(1, 1)",
  transition: "transform-0.5s-ease",
 }
})

export default function Navbar() {
 const classes = useStyle()
 return (
  <AppBar position="fixed" color="inherit">
   <Toolbar>
    <img src={Logo} height="100px" alt="Sneakers man" className={classes.image}/>
    <div className={classes.grow}/>
    <div className={classes.button}>
     <IconButton aria-label="Show Cart Items" color="default" size="large">
      <Badge badgeContent={2} color="primary">
       <ShoppingCart fontSize="inherit"/>
      </Badge>
     </IconButton>
    </div>
   </Toolbar>
  </AppBar>
 )
}