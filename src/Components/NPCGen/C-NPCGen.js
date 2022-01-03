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
    Button,
} from "../../styles.js";


// ========================GLOBABL VARIABLES

// ========================CUSTOM FUNCTIONS

// ========================ACTUAL COMPONENT
  const NPC_Generator = () => {
      
    //to get data to send back, need a useState.    
    const [optionValue, setOptionValue] = useState("None");
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
        
            <Button>
                Randomise
            </Button>

            <Button>
                New NPC
            </Button>

            <Button>
                Save
            </Button>

            <Button>
                Load
            </Button>

            <Button>
                Delete
            </Button>

        </InnerWrap>

        {/* NPC Basics options */}
        <Header3>NPC Basics</Header3>

        <InnerWrap flexColumn>
            <Header4>Name</Header4>
            <input type="text" />
                        
            <Header4>Gender</Header4>
                <input type="text" />
            
            <Header4>Race</Header4>
                <Dropdown onChange={handleSelect}>
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

            <InnerWrap>
            <Header4>Randomise All</Header4>
                <Button RANDALLButton></Button>
            </InnerWrap>
        </InnerWrap>

        {/* This section is for alignment buttons */}
        <Header3>NPC Alignment</Header3>

        <InnerWrap flexRowAlignment>
            
            <Button LGButton>LG</Button>
            <Button NGButton>NG</Button>
            <Button CGButton>CG</Button>
            
            <Button LNButton>LN</Button>
            <Button TNButton>TN</Button>
            <Button CNButton>CN</Button>
            
            <Button LEButton>LE</Button>
            <Button NEButton>NE</Button>
            <Button CEButton>CE</Button>

        </InnerWrap>

        {/* This section is for NPC Traits */}
        <Header3>NPC Traits</Header3>
        <InnerWrap flexColumn>

            <Header4>Talent</Header4>
                <input type="text" />
                <Button RANDButton></Button>
                        
            <Header4>Nature</Header4>
                <input type="text" />
                <Button RANDButton></Button>

            <Header4>Bond</Header4>
                <input type="text" />
                <Button RANDButton></Button>

            <Header4>Traits</Header4>
                <input type="text" />
                <Button RANDButton></Button>

            <InnerWrap>
            <Header4>Randomise All</Header4>
                <Button RANDALLButton></Button>
            </InnerWrap>
        </InnerWrap>

    </MainWrap>

    );
  };

  export default NPC_Generator;