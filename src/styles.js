// This file provides css styles to components in the project
import styled, { css } from "styled-components";

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

//style for a button
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

`;


// mainWrap is an outer wrapper to contain other containers
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

    // Additional rules for if a section has the keywork primary in its declaration
    ${props => props.flexRow && css`
    display: flex;
    flex-direction: row;
    
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