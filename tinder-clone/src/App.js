import React from "react";
import './App.css';
import Header from "./Header";
import ControlButoons from "./ControlButoons";
import TindrCards from "./TindrCards";

function App() {
  return (
    <div className="app">
      <Header/>
      <TindrCards/>
      <ControlButoons/>    
    </div>
  );
}

export default App;
