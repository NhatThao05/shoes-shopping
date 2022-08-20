import { Container } from "@mui/system";
import React from "react";
import Products from './components/Products/Products' 

function App() {
  return (
    <div>
      <Container fixed>
        <Products />
      </Container>
    </div>
  );
}

export default App;
