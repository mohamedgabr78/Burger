import React from "react";
import "./App.scss";
import Container from "./component/container/Container";

import Navbar from "./component/header/navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Container />
    </div>
  );
}

export default App;
