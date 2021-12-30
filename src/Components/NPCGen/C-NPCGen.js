//This file contains everything for an NPC Generator.
//Some components are written in, others are imported (which import their own CSS too)

// ========================IMPORTS
import React, { useState } from "react";
import { Dropdown, Option } from "../Dropdown/C-Dropdown";
import {
    MainWrap, 
    Header2, 
    Header3,
    Header4,
    InnerWrap,
} from "../../styles.js";

// ========================GLOBABL VARIABLES
//is used to check if mouse is hovering. toggled by button functions for mouseover
let isMouseHovering = false;

// ========================CSS VARIABLES
// CSS Rules for anything with a div tag in this component
var NPC_Generator_Style = {

// This is the default css style for a button element. used when the page loads
    compBtnNoneHover : {
        backgroundColor: "rgb(100,250,100)",
        boxShadow: "2px 2px 3px black",
        color: "black",

        border: "outset",
        borderRadius: "10px",
        
        padding: "5px",
        margin: "5px",
        textAlign: "Center",
        
        width: "100px",
        
        fontWeight: "bolder",
    }

    };

    // ========================CUSTOM FUNCTIONS
const setBTNHoverBtnON = (e) => {

    isMouseHovering = true
    
    // This function fires when a button is entered by the mouse, changing its style
    compBtn: {

        e.target.style.background = "rgb(100,250,100)";
        e.target.style.color = "white";
        e.target.style.borderRadius = "10px";
        e.target.style.fontWeight = "bolder";
    }
}

const setBTNHoverBtnOFF = (e) => {
    
    isMouseHovering = false

    // This function fires when a button is left by the mouse, changing its style
    compBtn: {
        e.target.style.background = "rgb(100,250,100)";
        e.target.style.color = "black";
        e.target.style.borderRadius = "10px";
        e.target.style.fontWeight = "bolder";
        e.target.style.border = "outset";
    }
}

const setBTNClickDown = (e) => {
    // This function fires when a button is clicked by the mouse, changing its style
    compBtn: {
        e.target.style.background = "rgb(50,200,50)";
        e.target.style.color = "rgb(240,240,240)";
        e.target.style.fontWeight = "100";
        e.target.style.borderRadius = "15px";
        e.target.style.border = "inset";
        
    }
}

const setBTNClickUp = (e) => {
    // This function fires when a button is unclicked by the mouse, changing its style
    if(isMouseHovering)
    {
        console.log("Hovering after click: " + isMouseHovering)
    compBtn: 
        {
            //if user is still hovering over button when click is released...
            {
                
                e.target.style.background = "rgb(100,250,100)";
                e.target.style.color = "white";
                e.target.style.fontWeight = "bolder";
                e.target.style.borderRadius = "10px";
                e.target.style.border = "outset";
            }
        }
    }
    else
    {
        console.log("Hovering after click: " + isMouseHovering)
        compBtn: 
        //if user is NOT still hovering over button when click is released...
        {
            e.target.style.background = "rgb(100,250,100)";
            e.target.style.color = "black";
            e.target.style.fontWeight = "bolder";
            e.target.style.borderRadius = "10px";
            e.target.style.border = "outset";
        }
    }
}

    // ========================ACTUAL COMPONENT
  const NPC_Generator = () => {
      
    //to get data to send back, need a useState.    
    const [optionValue, setOptionValue] = useState("");
    const handleSelect = (e) => 
    {
        console.log(e.target.value);
        setOptionValue(e.target.value);
    };

    return (

    // mainWrap is an outer wrapper to contain other containers
    <MainWrap>
        
       
        <Header2>
            NPC Generator
        </Header2>

        <InnerWrap flexRow>
        
            <div className="compBtn" style={NPC_Generator_Style.compBtnNoneHover} onMouseOver={setBTNHoverBtnON} onMouseLeave={setBTNHoverBtnOFF} onMouseDown={setBTNClickDown} onMouseUp={setBTNClickUp}>
                Randomise
            </div>

            <div className="compBtn" style={NPC_Generator_Style.compBtnNoneHover} onMouseOver={setBTNHoverBtnON} onMouseLeave={setBTNHoverBtnOFF} onMouseDown={setBTNClickDown} onMouseUp={setBTNClickUp}>
                New NPC
            </div>

            <div className="compBtn" style={NPC_Generator_Style.compBtnNoneHover} onMouseOver={setBTNHoverBtnON} onMouseLeave={setBTNHoverBtnOFF} onMouseDown={setBTNClickDown} onMouseUp={setBTNClickUp}>
                Save
            </div>

            <div className="compBtn" style={NPC_Generator_Style.compBtnNoneHover} onMouseOver={setBTNHoverBtnON} onMouseLeave={setBTNHoverBtnOFF} onMouseDown={setBTNClickDown} onMouseUp={setBTNClickUp}>
                Load
            </div>

            <div className="compBtn" style={NPC_Generator_Style.compBtnNoneHover} onMouseOver={setBTNHoverBtnON} onMouseLeave={setBTNHoverBtnOFF} onMouseDown={setBTNClickDown} onMouseUp={setBTNClickUp}>
                Delete
            </div>

        </InnerWrap>

        {/* NPC Basics options */}
        <Header3>
            NPC Basics
        </Header3>

        <InnerWrap>
            <Header4>
                Name
            </Header4>
                <input type="text" />
                        
            <Header4>
                Gender
            </Header4>
                <input type="text" />
            
            <Header4>
                Race
            </Header4>

                <Dropdown
                onChange={handleSelect}
                action = "/"
                >
                        <Option value= "Dragonborn" />
                        <Option value= "Dwarf" />
                        <Option value= "Elf" />
                        <Option value= "Gnome" />
                        <Option value= "Halfling" />
                        <Option value= "Human" />
                        <Option value= "Orc" />
                        <Option value= "Tiefling" />
                </Dropdown>
                <p>You selected {optionValue} </p>
        </InnerWrap>

    </MainWrap>
    );
  };

  export default NPC_Generator;