import React from "react";
import "./burger.scss";
import { useUser } from "../../Context";
function SandwichComponents() {
  const { state, dispatch } = useUser();

  const addComponets = (name) => {
    dispatch({ type: "ADD_COMPONENTS", payload: name });
  };
  const deleteComponets = (name) => {
    dispatch({ type: "DELETE_COMPONENTS", payload: name });
  };

  return (
    <div className="sandwich">
      <div className="sandwich-components">
        {state.sandwichComponents.beef > 0 ? (
          <i
            class="fas fa-minus-circle"
            onClick={() => {
              deleteComponets("beef");
            }}
          ></i>
        ) : null}

        <span>Beef</span>
        <span> {state.sandwichComponents.beef}</span>
        <i
          class="fas fa-plus-circle"
          onClick={() => {
            addComponets("beef");
          }}
        ></i>
      </div>
      <div className="sandwich-components">
        {state.sandwichComponents.chees > 0 ? (
          <i
            class="fas fa-minus-circle"
            onClick={() => {
              deleteComponets("chees");
            }}
          ></i>
        ) : null}
        <span>chees</span>
        {state.sandwichComponents.chees}
        <i
          class="fas fa-plus-circle"
          onClick={() => {
            addComponets("chees");
          }}
        ></i>
      </div>
      <div className="sandwich-components">
        {state.sandwichComponents.souce > 0 ? (
          <i
            class="fas fa-minus-circle"
            onClick={() => {
              deleteComponets("souce");
            }}
          ></i>
        ) : null}
        <span>souce</span>
        {state.sandwichComponents.souce}
        <i
          class="fas fa-plus-circle"
          onClick={() => {
            addComponets("souce");
          }}
        ></i>
      </div>
      <div className="sandwich-components">
        {state.sandwichComponents.salad > 0 ? (
          <i
            class="fas fa-minus-circle"
            onClick={() => {
              deleteComponets("salad");
            }}
          ></i>
        ) : null}
        <span>Salad</span>
        {state.sandwichComponents.salad}
        <i
          class="fas fa-plus-circle"
          onClick={() => {
            addComponets("salad");
          }}
        ></i>
      </div>
    </div>
  );
}

export default SandwichComponents;
