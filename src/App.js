import { Container } from "@mui/system";
import React, { useState, useEffect } from "react";
import Products from './components/Products/Products' 
import Navbar from "./components/Navbar/Navbar";
import {commerce} from './lib/commerce';

function App() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const {data} = await commerce.products.list();
    setProducts(data);
  }
  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <div>
      <Container fixed>
        <Navbar />
        <Products products={products}/>
      </Container>
    </div>
  );
}

export default App;
