import Character from "../Components/Character.js";
import Filters from "./Filters.js";
import axios from "axios";
import {useState, useEffect} from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./Characters.css"
const API = process.env.REACT_APP_API_URL;

export default function CharactersSearch() {
  const [allSearchedCharacters, setAllSearchedCharacters] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("character");

  useEffect(() => {
    axios.get(`${API}/characters/search?character=${searchTerm}`)
    .then((res) => {
      setAllSearchedCharacters(res.data);
      setCharacters(res.data);
    })
    .catch((e) => console.warn(e));
  }, [searchTerm]);

  return(<div className="Characters">
    <h2>Searched Characters: {searchTerm}</h2>

    <Link to="/characters/new"><button className="new-character">New Character</button></Link>

    <div className="d-flex">
      <Filters setData={setCharacters} allData={allSearchedCharacters}/>
   
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