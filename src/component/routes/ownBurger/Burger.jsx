import React from "react";
import "./burger.scss";
import SandwichBread from "./SandwichBread";
import SandwichComponents from "./SandwichComponents";
function Burger() {
  return (
    <div className="burger-container">
      <SandwichBread />
      <SandwichComponents />
    </div>
  );
}

export default Burger;
