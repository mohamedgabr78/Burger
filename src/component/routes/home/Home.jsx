import React from "react";
import { NavLink } from "react-router-dom";
import "./home.scss";
function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="about">
          <h2>about us</h2>
          <h3>this fucken shit built mn zaman awy</h3>
          <h2>
            our brunches
            <p>menof</p>
            <p>malta</p>
            <p>sidi fawzy</p>
            <p>agami</p>
          </h2>
        </div>
        <NavLink to="/register">Register Now</NavLink>
      </div>
    </div>
  );
}

export default Home;
