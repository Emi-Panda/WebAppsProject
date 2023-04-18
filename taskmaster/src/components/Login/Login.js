import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../CSS/Login.css";
import { UserAuth } from "../Context/AuthContext";

export default function Login({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const { signInUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInUser(email, password);
      navigate('/');
    } catch (e) {
      setError(e.message);
      console.log(error);
    }
  }



  return (
    <div className="COMPONENT-BODY">
      <div className="loginWrapper">
        <h1 className="logintitle">Sign in to your account.</h1>
        <p className="logintitle">
          Dont have an account?{" "}
          <Link to="/signup" className="logintitle-si">
            Sign up.
          </Link>
        </p>
        <form>
          <label htmlFor="username">
            <p>Username</p>
            <input type="text" onChange={e => setEmail(e.target.value)} />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
          </label>
          <div>
            <button onClick={handleSubmit} type="submit">Sign In</button>
          </div>
        </form>
      </div>

    </div>
  );
}
