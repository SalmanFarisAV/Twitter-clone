import React from "react";
import Feed from "./Feed";
import Widget from "./Widget";
import Sidebar from "../../Components/Sidebar";
import "./Home.css";
function App(props) {
  return (
    <div className="home">
      <Sidebar a1={true} />
      <Feed name={props.name} />
      <Widget />
    </div>
  );
}

export default App;
