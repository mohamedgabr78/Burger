import React, { useState } from "react";
import { useUser } from "../../Context";
import "./register.scss";
function Login() {
  const { state, dispatch } = useUser();
  const [showpassword, setShowpassword] = useState(false);
  const handelInputs = (e) => {
    dispatch({
      type: "HANDLE_INPUTS",
      inputName: e.target.name,
      inputValue: e.target.value,
    });
  };
  const handelSubmit = (e) => {
    dispatch({ type: "HANDLE_SUBMIT", e: e });
  };
  const handelRoute = () => {
    dispatch({ type: "HANDLE_ROUTE", payload: "/register" });
  };
  const handelAccount = () => {
    dispatch({ type: "HANDLE_ACCOUNT" });
  };

  return (
    <div className="base-container">
      <div className="header">
        LogIn
        <i
          onClick={() => {
            dispatch({ type: "HANDLE_ROUTE", payload: "/register" });
          }}
          class="fas fa-arrow-circle-right"
        ></i>
      </div>

      <div className="content">
        <form className="form" onSubmit={handelSubmit}>
          <input
            className="input"
            placeholder="enter your userName"
            name="loginUser"
            type="text"
            value={state.inputs.loginUser}
            onChange={(e) => handelInputs(e)}
          />
          <label htmlFor="username"></label>
          <input
            className="input"
            type={showpassword ? "text" : "password"}
            placeholder="enter your password"
            name="loginPassword"
            value={state.inputs.loginPassword}
            onChange={(e) => handelInputs(e)}
          />
          <label htmlFor="password"></label>
          <div className="footer">
            <button
              className="btn"
              value={state.account}
              onClick={() => {
                handelAccount();
              }}
            >
              login now
            </button>
          </div>
        </form>
      </div>
      <label className="checkBox">
        <input
          type="checkbox"
          defaultChecked={showpassword}
          onChange={() => {
            setShowpassword(!showpassword);
          }}
        ></input>
        showpassword
      </label>
      <div
        className="switch-register"
        onClick={() => {
          handelRoute();
        }}
      >
        <p> SignUp </p>
      </div>
    </div>
  );
}

export default Login;
