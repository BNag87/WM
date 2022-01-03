// This file provides css styles to components in the project
import styled, { css } from "styled-components";
import D20 from './Images/D20Twhite.png';

//style for a form
export const DropdownWrapper = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  
`;

//style for a select element (dropdown)
export const StyledSelect = styled.select`
  width: auto;
  height: 100%;
  padding: 8px;
  margin-top: -16px;
`;

//style for select options (a dropdown option)
export const StyledOption = styled.option`
  color: ${({ selected }) => (selected ? "lightgrey" : "black")};
`;

//style for labels
export const StyledLabel = styled.label`
  margin-bottom: 1rem;
`;

//style(s) for a button
export const Button = styled.button`
  background-color: rgb(100,250,100);
  box-shadow: 2px 2px 3px black;
  color: black;

  border: outset;
  border-radius: 10px;
  
  padding: 5px;
  margin: 5px;
  text-align: Center;
  width: auto;
  
  font-weight: bolder;
  font-size: 1.5rem;
  font-variant: small-caps;

// Style override for a Randomiser Button
${props => props.RANDButton && css`
  background: url(${D20});
  background-size: 25px 26px;
  background-repeat: no-repeat;
  background-position: center;

  background-color: gray;
  

  width: 35px;
  height: 35px;

  border: outset 1px;
  border-radius: 5px;


`}

// Style override for a Randomise ALL Button
${props => props.RANDALLButton && css`
  background: url(${D20});
  background-size: 25px 26px;
  background-repeat: no-repeat;
  background-position: center;

  background-color: black;
  
  width: 35px;
  height: 35px;

  border: outset 1px;
  border-radius: 5px;
`}

// Colour override for a Lawful Good Button
${props => props.LGButton && css`
background-color: rgb(135, 135, 255);
color: white;
width: 50px;
`}

// Colour override for a Neutral Good Button
${props => props.NGButton && css`
background-color: rgb(105, 105, 255);
color: white;
width: 50px;
`}

// Colour override for a Chatotic Good Button
${props => props.CGButton && css`
background-color: rgb(21, 21, 255);
color: white;
width: 50px;
`}

// Colour override for a Lawful Neutral Button
${props => props.LNButton && css`
background-color: rgb(138, 138, 138);
color: white;
width: 50px;
`}

// Colour override for a True Neutral Button
${props => props.TNButton && css`
background-color: rgb(108, 108, 108);
color: white;
width: 50px;
`}

// Colour override for a Chaotic Neutral Button
${props => props.CNButton && css`
background-color: rgb(70, 70, 70);
color: white;
width: 50px;
`}

// Colour override for a Lawful Evil Button
${props => props.LEButton && css`
background-color: rgb(255, 61, 61);
color: white;
width: 50px;
`}

// Colour override for a Neutral Evil Button
${props => props.NEButton && css`
background-color: rgb(245, 0, 0);
color: white;
width: 50px;
`}

// Colour override for a Chaotic Evil Button
${props => props.CEButton && css`
background-color: rgb(184, 0, 0);
color: white;
width: 50px;
`}

`;


//MainWrap is meant to wrap other items as a panel
export const MainWrap = styled.div`

    background: linear-gradient(to bottom, rgba(145,85,77,0.5), rgba(185, 156, 107,0.5));
    border: solid 2px rgba(150,90,85,0.7);
    border-radius: 8px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    color: white;
    
    height: 10%;
    padding: 10px;
    margin: 50px;
    
    width: 90%;

    text-align: center
`;

// InnerWrap is a wrapper to contain individual elements in a component
export const InnerWrap = styled.div`

    background: linear-gradient(to bottom, rgba(145,85,77,0.7), rgba(185, 156, 107, 0.5));
    border: solid 2px rgba(150,90,85,0.7);
    border-radius: 8px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    color: white;
    
    height: 10%;
    padding: 10px;
    margin: 5px;
    margin-bottom: 20px;
    
    width: auto;

    text-align: center

    // Additional rules for if an 'Innerwrap' section that has the keyword 'flexRow' in its declaration
    ${props => props.flexRow && css`
    display: flex;
    flex-direction: row;
    `}

    // Additional rules for if an 'Innerwrap' section that has the keyword 'flexColumn' in its declaration
    ${props => props.flexColumn && css`
    display: flex;
    flex-direction: column;
  `}

  // Additional rules for if an 'Innerwrap' section that has the keyword 'flexColumnAlignment' in its declaration
  ${props => props.flexRowAlignment && css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 180px;
  justify-content: space-evenly;
`}
`;

// A new component based on Innerwrap, but with its display style overwritten
export const GridInnerWrap = styled(InnerWrap)`
  display: grid
`;

//this is a h2 style
export const Header2 = styled.h2`
    color: white;
    text-shadow: rgb(50, 50, 50) 2px 2px 1px;

    font-size: 2.3rem;
    font-family: Cambria;
    font-variant: small-caps;

    margin: 5px;
`;

//this is a h3 style
export const Header3 = styled.h3`
    color: white;
    text-shadow: rgb(50, 50, 50) 2px 2px 1px;

    font-size: 2.0rem;
    font-family: Cambria;
    font-variant: small-caps;

    margin: 5px;
`;

//this is a h4 style
export const Header4 = styled.h4`
    color: lightgray;
    text-shadow: rgb(50, 50, 50) 2px 2px 1px;

    font-size: 1.5rem;
    font-family: Cambria;
    font-variant: small-caps;

    margin: 3px;
`;