import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

export default function CharacterDetails() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [character, setCharacter] = useState({})

  useEffect(() => {
    axios.get(`${API}/characters/${id}`)
    .then((res) => {
      setCharacter(res.data)
    })
    .catch((e) => console.warn("catch", e))
  }, [id])

  return(<div className="CharacterDetails">
    <h2>{character.name}</h2>
    <h3>From: {character.game}</h3>
    <img src={character.image} alt={character.name} width="400px"/>
    <p>{character.description}</p>
    <span className="classifications">
      <h5>Main Character:{character.protagonist ? " ⭐️" : " ❌"}</h5>
      <h5>Playable:{character.playable ? " ⭐️" : " ❌"}</h5>
      <h5>LGBTQ:{character.lgbt ?  ` ⭐️ ${character.lgbt_type}` : " ❌"}</h5> 
      <h5>Person of Color:{character.poc ? ` ⭐️ ${character.poc_type}` : " ❌"}</h5>
      {/* <h5>Disabled:{character.disability ? ` ⭐️ ${character.disability_type}` : " ❌"}</h5> */}
    </span>
    
    <button>Edit</button>
    <button>Delete</button>
    <button>Back to Characters</button>

  </div>);
}