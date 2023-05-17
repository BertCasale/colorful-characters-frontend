import Character from "../Components/Character.js";
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
    <h2>Characters</h2>
    {allCharacters.map((character) => {
      return(<Character key={character.id} character={character}/>)
    })}
    
  </div>);
}