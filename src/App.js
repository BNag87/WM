//===================IMPORTS
import './App.css';
import React from "react";

//===================COMPONENT IMPORTS
import TopNavbar from './Components/TopNavbar/C-TopNavBar';
import Sidebar from './Components/Sidebar/C-Sidebar';
import NPC_Generator from './Components/NPCGen/C-NPCGen';

//===================APP STUFF
//NEED ROUTES
//NEED COMPONENTS

function App() {
  return (
    <>
      <TopNavbar/>
      <div className="pairedCompWrapper">
        <Sidebar />
        <NPC_Generator />
      </div>
    </>
  );
}

export default App;
