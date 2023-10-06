import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h2>-<br/>NapaExtra <br/>-</h2>
         
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            officia est labore? Pariatur numquam veniam itaque atque magni qui
            maxime ipsum?
          </p>

          <span>Don't have An Account</span>

          <Link to='/signup'>
          <button className="btn btn-primary">Register</button>
        </Link>

        </div>

        <form className="right">
          <input type="text" required placeholder="User Name" />
          <input type="password" required placeholder="Password" />
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
