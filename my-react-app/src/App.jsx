import React from "react";
import Studnet from "./Studnet "
import Task2 from "./Task2";
import Task3 from "./Task3";

// import NavBar from "./NavBar";
// import Home from './Home'
// import About from './About'
function App() {
  return (
    <>
    <Studnet name="arun" age={21} course="React.js"/>
  <hr />
    <Studnet name="arun Kumar" age={20} course="java"/>
    <hr />
    <Studnet name="bala" age={22} course="python"/>
   <hr />
   <Task2/>
   <hr />
   <Task3/>
   <hr /> 

     {/* <h1>FlipKart</h1>
    <nav style>
     
      <a href="Home.jsx">Home</a>
       <a href="Student.jsx">About</a>
        <a href="Studnet.jsx">Studnet</a>
    </nav> */}
    </>
  )
}

export default App
