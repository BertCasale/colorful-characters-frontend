import Character from "../Components/Character.js";
import Filters from "./Filters.js";
import axios from "axios";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./Characters.css"
const API = process.env.REACT_APP_API_URL;

export default function Characters() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(`${API}/characters`)
    .then((res) => {
      setAllCharacters(res.data);
      setCharacters(res.data);
    })
    .catch((e) => console.warn(e));
  }, []);

  return(<div className="Characters">
    <h2>Characters</h2>

    <Link to="/characters/new"><button className="new-character">New Character</button></Link>

    <div className="d-flex">
      <Filters setData={setCharacters} allData={allCharacters}/>
   
      {characters[0] ? 
      <div className="character-list d-flex flex-wrap justify-content-start">
        {characters.map((character) => {
          return(<Character key={character.id} character={character}/>)
        })}
      </div>:
      <h1 className="no-results">No results to display.</h1>}
      
    </div>

  </div>);
}