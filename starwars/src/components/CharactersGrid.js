import React  from "react";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const GridContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin-right: 10%;
    margin-left: 10%;
`;

const CharacterGrid = props => {

    let characters = props.parts
     
    return ( 
    <GridContainer>
        {characters.map((char, index) => {
            return <CharacterCard key={index} char1={char} />;
        })}
    </GridContainer>
    )
}


export default CharacterGrid