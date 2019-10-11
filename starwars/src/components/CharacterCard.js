import React from "react";
import styled from 'styled-components';

let CharCard = styled.section`
    width: 380px;
    display: flex;
    flex-direction: column;
    background: #133757;
    font-family: 'Josefin Sans', sans-serif;
    border-top: 30px solid black;
    border-bottom: 15px solid black;
    margin: 10px;
   `;

let CharCardBody = styled.div`
      width: 100%;
   `;

let CharCardName = styled.h1`
    padding-top: 20px;
    padding-bottom: 20px;  
    font-family: 'Josefin Sans', sans-serif;
    font-size: 2.25rem;
    color: #79daca;
   `;
   
let CharCardSubtitle = styled.h2`
    font-size: 1.5rem;
    font-family: 'Merriweather', serif;
    text-transform: uppercase;
    letter-spacing: 3px;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #d66c44;  
   `;

let CharCardContent = styled.section`
    width: 100%;
    padding: 5px;
   `;

let CharCardInfo = styled.p`
    font-size: 1rem;
    padding: 10px;
    margin-left: 10px;
    font-family: 'Merriweather', serif;
    text-align: justify;
    color: #ffc3ad;
   `;


const CharacterCard = props => {     
   
    return ( 
      <CharCard>
        <div>
            <img src={ require("./unsplashStars.jpg")}  alt="Charcter Image"/>
        </div>
        <CharCardBody>
          <CharCardName>{props.char1.name}</CharCardName>
          <CharCardSubtitle>Description</CharCardSubtitle>
          <CharCardContent>
              <CharCardInfo>Gender: {props.char1.gender}</CharCardInfo>
              <CharCardInfo>Height:  {props.char1.height}cm</CharCardInfo>
              <CharCardInfo>Skin Color: {props.char1.skin_color}</CharCardInfo>
              <CharCardInfo>Hair Color: {props.char1.hair_color}</CharCardInfo>
              <CharCardInfo>Eye Color: {props.char1.eye_color}</CharCardInfo>
          </CharCardContent>
        </CharCardBody>
      </CharCard>
    )

}
export default CharacterCard