import Character from "../Components/Character.js";
import Filters from "./Filters.js";
import Searchbar from "./Searchbar.js";
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
    <div className="search">
      <Searchbar/>    
      <Link to="/characters/new" className="new-character"><button>New Character</button></Link>
    </div>

    <div className="d-flex">
      <Filters setCharacters={setCharacters} allCharacters={allCharacters}/>
   

      <div className="character-list d-flex flex-wrap justify-content-start">
        {characters.map((character) => {
          return(<Character key={character.id} character={character}/>)
        })}
      </div>
    </div>

  </div>);
}