import React from "react";
import { useUser } from "../../Context";
import "./register.scss";
function SignUp() {
  const { state, dispatch } = useUser();
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

  return (
    <div className="base-container">
      <div className="header">Register</div>
      <i
        onClick={() => {
          dispatch({ type: "HANDLE_ROUTE", payload: "/login" });
        }}
        class="fas fa-arrow-circle-right"
      ></i>
      <div className="content">
        <div className="img"></div>

        <form className="form" onSubmit={handelSubmit}>
          <input
            name="username"
            type="text"
            className="input"
            placeholder="enter your userName"
            value={state.inputs.username}
            onChange={(e) => handelInputs(e)}
          />
          <label htmlFor="username"></label>
          <input
            name="email"
            type="taxt"
            className="input"
            placeholder="enter your e-mail"
            value={state.inputs.email}
            onChange={(e) => handelInputs(e)}
          />
          <label htmlFor="e-mail"></label>
          <input
            name="fullname"
            type="text"
            className="input"
            placeholder="enter your fullName"
            value={state.inputs.fullname}
            onChange={(e) => handelInputs(e)}
          />
          <label htmlFor="fullName"></label>
          <input
            className="input"
            name="password"
            type="password"
            placeholder="enter your password"
            value={state.inputs.password}
            onChange={(e) => handelInputs(e)}
          />
          <label htmlFor="password"></label>
          <div className="footer">
            <button className="btn" type="submit">
              Register now
            </button>
          </div>
        </form>
      </div>
      <div
        className="switch-register"
        onClick={() => {
          dispatch({ type: "HANDLE_ROUTE", payload: "/login" });
        }}
      >
        <p>LogIn</p>
      </div>
    </div>
  );
}
export default SignUp;
