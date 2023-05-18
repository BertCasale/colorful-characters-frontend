import Character from "../Components/Character.js";
import Filters from "./Filters.js";
import Searchbar from "./Searchbar.js";
import axios from "axios";
import {useState, useEffect} from "react";
const API = process.env.REACT_APP_API_URL;

export default function Characters() {
  const [allCharacters, setAllCharacters] = useState([]);

  useEffect(() => {
    axios.get(`${API}/characters`)
    .then((res) => {
      setAllCharacters(res.data);
    })
    .catch((e) => console.warn(e));
  }, []);

  return(<div className="Characters">
    <Searchbar/>
    <h2>Characters</h2>
    <div className="d-flex">
      <Filters/>
   

      <div className="character-list d-flex flex-wrap justify-content-start">
        {allCharacters.map((character) => {
          return(<Character key={character.id} character={character}/>)
        })}
      </div>
    </div>

  </div>);
}