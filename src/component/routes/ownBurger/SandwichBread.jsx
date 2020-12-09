import React from "react";
import "./burger.scss";
import { useUser } from "../../Context";
import bread from "../../../images/bread1.jpg";
import bread2 from "../../../images/bread2.jpg";
import salad from "../../../images/salad.jpeg";
import souce from "../../../images/souse.jpg";
import chees from "../../../images/chees.png";
import beef from "../../../images/beef.jpg";
function SandwichBread() {
  const { state, dispatch } = useUser();
  return (
    <div className="bread">
      <div className="bread-one">
        <img src={bread} alt="bread" />
      </div>
      {state.sandwichComponents.salad > 0 ? (
        <div className="salad">
          <img src={salad} alt="salad" />
        </div>
      ) : null}
      {state.sandwichComponents.souce > 0 ? (
        <div className="souce">
          <img src={souce} alt="souce" />
        </div>
      ) : null}
      {state.sandwichComponents.chees > 0 ? (
        <div className="chees">
          <img src={chees} alt="chees" />
        </div>
      ) : null}
      {state.sandwichComponents.beef > 0 ? (
        <div className="beef">
          <img src={beef} alt="beef" />
        </div>
      ) : null}
      <div className="bread-two">
        <img src={bread2} alt="bread" />
      </div>
    </div>
  );
}

export default SandwichBread;
