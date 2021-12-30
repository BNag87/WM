// This file provides css styles to components in the project
import styled, { css } from "styled-components";

export const DropdownWrapper = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  
`;

export const StyledSelect = styled.select`
  width: auto;
  height: 100%;
  padding: 8px;
  margin-top: -16px;
`;

export const StyledOption = styled.option`
  color: ${({ selected }) => (selected ? "lightgrey" : "black")};
`;

export const StyledLabel = styled.label`
  margin-bottom: 1rem;
`;

export const StyledButton = styled.input`
  max-width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  border: solid 2px blue;
  padding: 0.5rem;
  border-radius: 1rem;
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

// mainWrap is an outer wrapper to contain other containers
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

export const Header2 = styled.h2`
    color: white;
    text-shadow: rgb(50, 50, 50) 2px 2px 1px;

    font-size: 2.3rem;
    font-family: Cambria;
    font-variant: small-caps;

    margin: 5px;
`;

export const Header3 = styled.h3`
    color: white;
    text-shadow: rgb(50, 50, 50) 2px 2px 1px;

    font-size: 2.0rem;
    font-family: Cambria;
    font-variant: small-caps;

    margin: 5px;
`;

export const Header4 = styled.h4`
    color: lightgray;
    text-shadow: rgb(50, 50, 50) 2px 2px 1px;

    font-size: 1.5rem;
    font-family: Cambria;
    font-variant: small-caps;

    margin: 3px;
`;