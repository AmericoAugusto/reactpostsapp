import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginScreen from "./component/LoginScreen/LoginScreen.js";
import MainScreen from './component/MainScreen/MainScreen.js'

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

