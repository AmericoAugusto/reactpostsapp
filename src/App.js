import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginScreen from "./assets/component/loginScreen/LoginScreen.js";
import MainScreen from './assets/component/mainScreen/MainScreen.js'



  const App = () => {
   return (
  <>
   <modalScreen />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="MainScreen" element={<MainScreen />} />
      
      </Routes>
     
    </BrowserRouter>
   
</>

  );
};
export default App;

