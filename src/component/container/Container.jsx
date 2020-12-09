import React, { useEffect, useReducer } from "react";
import "./container.scss";
import Home from ".././routes/home/Home";
import Menu from ".././routes/menu/Menu";
import Burger from ".././routes/ownBurger/Burger";
import { Route, Switch, useHistory } from "react-router-dom";
import { userContext } from "../Context";
import Login from "../routes/register/Login";
import SignUp from "../routes/register/SignUp";

const initialState = {
  inputs: {
    loginUser: "",
    loginPassword: "",
    username: "",
    email: "",
    fullname: "",
    password: "",
  },
  sandwichComponents: {
    beef: 0,
    chees: 0,
    souce: 0,
    salad: 0,
  },
};
const reducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_INPUTS":
      return {
        ...state,
        inputs: { ...state.inputs, [action.inputName]: action.inputValue },
      };
    case "RESET_VALUES":
      return {
        ...state,
        inputs: initialState.inputs,
      };
    case "HANDLE_SUBMIT":
      action.e.preventDefault();
      return {
        ...state,
        inputs: initialState.inputs,
      };
    case "HANDLE_ROUTE":
      return {
        ...state,
        inputs: initialState.inputs,
        route: action.payload,
      };
    case "HANDLE_ACCOUNT":
      return {
        ...state,
        account: true,
      };
    case "ADD_COMPONENTS":
      return {
        ...state,
        sandwichComponents: {
          ...state.sandwichComponents,
          [action.payload]: state.sandwichComponents[action.payload] + 1,
        },
      };
    case "DELETE_COMPONENTS":
      return {
        ...state,
        sandwichComponents: {
          ...state.sandwichComponents,
          [action.payload]: state.sandwichComponents[action.payload] - 1,
        },
      };

    default:
      return state;
  }
};

function Container() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const history = useHistory();

  useEffect(() => {
    if (state.route) {
      history.push(state.route);
    }
  }, [state.route]);

  return (
    <div className="container">
      <userContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Menu} path="/menu" exact />
          <Route component={Burger} path="/burger" exact />
          <Route component={Login} path="/login" exact />
          <Route component={SignUp} path="/register" exact />
        </Switch>
      </userContext.Provider>
    </div>
  );
}

export default Container;
