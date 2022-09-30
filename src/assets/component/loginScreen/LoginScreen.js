import { useNavigate } from "react-router-dom";
import "../loginScreen/LoginScreen.css";
import React, { useState, useEffect } from "react";


const LoginScreen = () => {

  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [name, setName] = useState("");

  useEffect(() => {
    if (name.length <= 3) {
        setIsButtonDisabled(true);
    }
    else {
        setIsButtonDisabled(false);
    }
 }, [name]);

 

  const enter = () => {
    navigate("/MainScreen");
    
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form onSubmit={enter} className="login-form">
            <span className="login-form-tittle">
              Welcome to CodeLeap network!
            </span>
            <div className="wrap-input">
              <div className="wrap-subtittle"> Please, enter your username</div>
              <input className="input" type="text"
                 onChange={(e) => setName(e.target.value)} />
            
              <span className="focus-input" placeholder=""></span>
            </div>
            <div className="container-login-form-btn">

              <button className="login-form-btn" onClick={() => enter(name)}
               disabled={isButtonDisabled}>ENTER</button>
              
        
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginScreen;