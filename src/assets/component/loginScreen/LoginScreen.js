import React from "react";
import { useNavigate } from "react-router-dom";
import "../loginScreen/LoginScreen.css";


const LoginScreen = () => {
  const navigate = useNavigate();

  const Enter = () => {
    navigate("/MainScreen");
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-tittle">
              Welcome to CodeLeap network!
            </span>
            <div className="wrap-input">
              <div className="wrap-subtittle"> Please, enter your username</div>
              <input className="input" type="text" />
              <span className="focus-input" placeholder=""></span>
            </div>
            <div className="container-login-form-btn">
              <button className="login-form-btn" onClick={Enter}>ENTER</button>
        
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginScreen;