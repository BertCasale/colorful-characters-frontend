import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./CharacterDetails.css";
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
  }, [id]);

  const deleteCharacter = () => {
    axios.delete(`${API}/characters/${id}`)
    .then(() => {
      navigate("/characters");
    })
    .catch((e) => console.warn("catch", e));
  }

  const handleDelete = () => {
    deleteCharacter()
  }

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
      <h5>Disabled:{character.disability ? ` ⭐️ ${character.disability_type}` : " ❌"}</h5>
    </span>
    
    <div className="buttons">
      <Link to={`/characters/${id}/edit`}><button className="btn btn-warning">Edit</button></Link>
      <button data-bs-toggle="modal" data-bs-target="#deleteModal" className="btn btn-danger">Delete</button>
      <Link to="/characters"><button className="btn btn-primary">Back to Characters</button></Link>
    </div>

    <div className="modal fade" id="deleteModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          
          <div className="modal-header">
            <h1 className="modal-title">Are you sure you want to delete character!</h1>
          </div>

          <div className="modal-body">
            <button className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button className="btn btn-danger" onClick={handleDelete} data-bs-dismiss="modal">Delete</button>
          </div>

        </div>
      </div>
    </div>

  </div>);
}