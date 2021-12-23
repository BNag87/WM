// npm i react-pro sidebar

//===========CSS IMPORTS===========
import 'react-pro-sidebar/dist/css/styles.css';
import './C-Sidebar.css';

//===========NPM COMPONENT IMPORTS===========
  //import useState to collapse menu
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//===========CUSTOM  COMPONENT IMPORTS===========



import { 
  ProSidebar, 
  Menu, 
  MenuItem, 
  SubMenu, 
  SidebarHeader, 
  SidebarContent,
  SidebarFooter
} from 'react-pro-sidebar';

  //import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiChevronsRight,
  FiChevronsLeft,
  FiInfo
} from "react-icons/fi";

import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { IconContext } from "react-icons";

//===========COMPONENT===========
const Sidebar = () => {

    //useState to control a boolean that hides/shows the navbar
    const [ToggleBar, setToggleBar] = useState(false);

    // Function to invert a boolean thats used to hide/show the whole navbar
    var toggleNav = () => {
    setToggleBar(prev => !prev)
    }

    return (
    <> 
    <div id="header">
    {/* Sidebar component. uses ToggleBar usestate to collapse itself */}
    <ProSidebar 
        breakPoint = "sm"
        collapsed={ToggleBar} 
        onToggle = {() => setToggleBar(prev => !prev)}
    >

    {/* Sidebar header declarations */}
    <SidebarHeader>
        
        <Menu iconShape="circle">
          <MenuItem>
            <div>

              {/* checks if Togglebar is true, gives alternate results */}
              {<p>{ToggleBar ? 

              // Iconprovider allows css to be applied inline to icons
                <IconContext.Provider value={{ color: "white", size: "29px", fontWeight: "strong"}}>
                    <FiChevronsRight onClick={toggleNav} /> 
                </IconContext.Provider>
                    : 
                <IconContext.Provider value={{ color: "white", size: "29px", fontWeight: "strong" }}>
                    <FiChevronsLeft onClick={toggleNav}/>
                </IconContext.Provider>
              }
              </p>}

            </div>
          </MenuItem>
        </Menu>
    </SidebarHeader>

    {/* Wrap all sidebar content in here */}
    <SidebarContent>

                <Menu iconShape="square">
                    <MenuItem active={true} icon={<FiHome />}>
                    Home
                    </MenuItem>
                
{/* 
ENSURE THERE ARE NO ROUTES FOR THE TIME BEING
*/}
                    <MenuItem icon={<FaList />}>My Campaign
                      {/* <Route path="/FAQ">
                        <Faq />
                      </Route> */}
                    </MenuItem>


                    <MenuItem icon={<FiInfo />}>My World          
                      {/* <Route path="/About">
                        <AboutUs />
                      </Route> */}
                    </MenuItem>

                    <MenuItem icon={<RiPencilLine />}>My Characters</MenuItem>
                    <MenuItem icon={<BiCog />}>Settings</MenuItem>
                    <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
                </Menu>


        
    </SidebarContent>

        </ProSidebar>
        </div>
    </>

    )
}

export default Sidebar;