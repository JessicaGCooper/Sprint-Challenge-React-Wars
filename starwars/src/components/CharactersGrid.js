import React  from "react";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const GridContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
`;

const CharacterGrid = props => {

    let characters = props.parts
     
    return ( 
    <GridContainer className="GridContainer">
        {characters.map((char, index) => {
            return <CharacterCard key={index} char1={char} />;
        })}
    </GridContainer>
    )
}


export default CharacterGrid