import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import CharacterGrid from './components/CharactersGrid'
import styled from 'styled-components'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [parts, setParts] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
    
  const StarHeader = styled.header`
    width: 850px;
  `;  
  
  useEffect(() => {
      
       axios
            .get('https://swapi.co/api/people/')
            .then(response => {
                setParts(response.data.results);
                console.log(response.data.results)
            })
            .catch(error => {
                console.log("The data was not returned:", error)
            });
    }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterGrid parts={parts}/>
    </div>
  );
}

export default App;

// birth_year: "19BBY"
// created: "2014-12-09T13:50:51.644000Z"
// edited: "2014-12-20T21:17:56.891000Z"
// eye_color: "blue"
// films: (5) ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/", "https://swapi.co/api/films/7/"]
// gender: "male"
// hair_color: "blond"
// height: "172"
// homeworld: "https://swapi.co/api/planets/1/"
// mass: "77"
// name: "Luke Skywalker"
// skin_color: "fair"
// species: ["https://swapi.co/api/species/1/"]
// starships: (2) ["https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/"]
// url: "https://swapi.co/api/people/1/"
// vehicles: (2) ["https://swapi.co/api/vehicles/14/", "https://swapi.co/api/vehicles/30/"]
// __proto__: Object

// Star Wars and all associated names and/or images are copyright Lucasfilm Ltd. Images were freely collected from Wookiepedia.