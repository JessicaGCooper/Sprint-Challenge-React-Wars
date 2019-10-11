import React, { useState } from "react";
import styled from 'styled-components';

const CharacterCard = props => {     
     
   let CharCard = styled.section`
    width: 380px;
    display: flex;
    background: #133757;
    font-family: 'Josefin Sans', sans-serif;
    border-top: 30px solid black;
    border-bottom: 15px solid black;
    margin: 30px;
   `;

//    let CharImageContainer= styled.div`
   
//    `;

//    let CharImg= styled.img`
   
//    `;

   let CharCardBody = styled.div`
      width: 100%;
      style: flex;
   `;

   let CharCardName = styled.h1`
    padding-top: 20px;  
    font-family: 'Josefin Sans', sans-serif;
    font-size: 3rem;
    color: white;
   `;
   
   let CharCardSubtitle = styled.h2`
    font-size: 1.75rem;
    font-family: 'Merriweather', serif;
    text-transform: uppercase;
    letter-spacing: 3px;
   `;

   let CharCardContent = styled.section`
    width: 100%;
    style: flex;
    padding: 5px;
   `;

   let CharCardInfo = styled.p`
    font-size: 1rem;
    padding: 10px;
    margin: 10px;
    font-family: 'Merriweather', serif;
    text-align: justify;
    line-height: 1.5;
    color: #ffc3ad;
   `;
   
   
    return ( 
      <CharCard>
        {/* <CharImageContainer>
            <CharImg src="./unsplashStars.jpg" alt="Charcter Image" />
        </CharImageContainer> */}
        <CharCardBody>
          <CharCardName>{props.char1.name}</CharCardName>
          <CharCardSubtitle>Description</CharCardSubtitle>
          <CharCardContent>
              {/* <CharCardInfo>Homeworld: </CharCardInfo>
              <CharCardInfo>Species: </CharCardInfo> */}
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