import React from "react";
import { useNavigate } from "react-router-dom";
import "../../CSS/preferences.css";

import { UserAuth } from "../Context/AuthContext";

export default function Preferences() {
  const {user, logoutUser} = UserAuth({});
  const navigate = useNavigate(); 

  const handleLogout = async (e) => {
    e.preventDefault();
    try{
      await logoutUser();
      navigate('/');


    } catch (e) {
    }
  }

  return (
    <div className="COMPONENT-BODY">
      <div className="preferences">
        <h2>Account Information</h2>
        <form>
          <p type="text" id="name" name="name">Name: Name</p>

          <p type="email" id="email" name="email">Email: {user.email}</p>

          <p type="password" id="password" name="password">Password: PW</p>

          <div>
            <button onClick={handleLogout} type="logout">Sign Out</button>
          </div>
        </form>
      </div>
    </div>
  );
}
