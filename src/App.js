import { Container } from "@mui/system";
import React from "react";
import Products from './components/Products/Products' 
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div>
      <Container fixed>
        <Navbar />
        <Products />
      </Container>
    </div>
  );
}

export default App;
