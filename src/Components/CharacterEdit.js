import axios from "axios";
import {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

export default function CharacterEdit() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState({
    name: "",
    image: "",
    description: "",
    game: "",
    protagonist: false,
    playable: false,
    lgbt: false,
    lgbt_type: "",
    poc: false,
    poc_type: "",
    disability: false,
    disability_type: ""
  });

  useEffect(() => {
    axios.get(`${API}/characters/${id}`)
    .then((res) => {
      setCharacter(res.data)
    })
    .catch((e) => console.warn("catch", e))
  }, [id])

  const handleTextChange = (event) => {
    setCharacter({...character, [event.target.id]: event.target.value});
  }

  const handleCheckChange = (event) => {
    setCharacter({...character, [event.target.id]: event.target.checked});
  }

  const editCharacter = (updatedCharacter) => {
    axios.put(`${API}/characters/${id}`, updatedCharacter)
    .then(() => {
      navigate(`/characters/${id}`);
    })
    .catch((e) => console.warn("catch", e))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (character.lgbt_type || character.poc_type | character.disability_type) {
      editCharacter(character, id);
    }
  }

  return(<div className="CharacterEdit">
    <form className="needs-validation" onSubmit={handleSubmit}>

      <div className="row text-start m-3">

        <div className="col-6">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            className={`form-control ${character.name ? "is-valid" : "is-invalid"}`}
            type="text" 
            placeholder="Name"
            name="name"
            id="name"
            value={character.name}
            onChange={handleTextChange}
            required/>
          <div className="invalid-feedback">Please enter a name.</div>
        </div>

        <div className="col-6">
          <label htmlFor="game" className="form-label">Game</label>
          <input 
            className={`form-control ${character.game ? "is-valid" : "is-invalid"}`}
            type="text"
            placeholder="Game"
            name="game"
            id="game"
            value={character.game}
            onChange={handleTextChange}
            required/>
          <div className="invalid-feedback">Please enter a game.</div>
        </div>

        <div className="col-12">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea 
            className={`form-control ${character.description ? "is-valid" : "is-invalid"}`}
            type="text"
            placeholder="Description"
            name="description"
            id="description"
            value={character.description}
            onChange={handleTextChange}
            required/>
          <div className="invalid-feedback">Please enter the description.</div>
        </div>

        <div className="col-12">
          <label htmlFor="Image" className="form-label">Image URL</label>
            <input 
              className={`form-control ${character.image ? "is-valid" : "is-invalid"}`}
              type="text"
              placeholder="https://"
              name="image"
              id="image"
              value={character.image}
              onChange={handleTextChange}
              required/>
            <div className="invalid-feedback">Please enter the image URL.</div>
          </div>
      </div>

      <div className="row m-4">
        <div className="form-check col-4 text-start">
          <input 
            className="form-check-input"
            type="checkbox" 
            name="playable"
            id="playable"
            checked={character.playable}
            onChange={handleCheckChange}
            />
          <label htmlFor="playable" className="form-check-label">Playable</label>
        </div>

        <div className="form-check col-4 text-start">
          <input 
            className="form-check-input"
            type="checkbox" 
            name="main character"
            id="protagonist"
            checked={character.protagonist}
            onChange={handleCheckChange}
            />
          <label htmlFor="main character" className="form-check-label">Main Character</label>
        </div>
      </div>

      <div className="row m-3">

        <div className="input-group">
          <div className="input-group-text">LGBTQ</div>
          <div className="input-group-text">
            <input 
              className="form-check-input" type="checkbox"
              name="lgbtq"
              id="lgbt"
              checked={character.lgbt}
              onChange={handleCheckChange}/>
          </div>
          <input 
            className="form-control"
            type="text"
            placeholder="Type"
            id="lgbt_type"
            value={character.lgbt_type ? character.lgbt_type : ""}
            onChange={handleTextChange}
            disabled={!character.lgbt}/>
        </div>

        <div className="input-group">
          <div className="input-group-text">Person of Color</div>
          <div className="input-group-text">
            <input 
              className="form-check-input" type="checkbox"
              name="person of color"
              id="poc"
              checked={character.poc}
              onChange={handleCheckChange}/>
          </div>
          <input 
            className="form-control"
            type="text"
            placeholder="Type"
            id="poc_type"
            value={character.poc_type ? character.poc_type : ""}
            onChange={handleTextChange}
            disabled={!character.poc}/>
        </div>

        <div className="input-group">
          <div className="input-group-text">Disabled</div>
          <div className="input-group-text">
            <input 
              className="form-check-input" type="checkbox"
              name="disabled"
              id="disability"
              checked={character.disability}
              onChange={handleCheckChange}/>
          </div>
          <input 
            className="form-control"
            type="text"
            placeholder="Type"
            id="disability_type"
            value={character.disability_type ? character.disability_type : ""}
            onChange={handleTextChange}
            disabled={!character.disability}/>
        </div>

        <div className={!character.lgbt_type && !character.poc_type && !character.disability_type ? "visible" : "invisible"}>Please select and enter a value for at least one option above.</div>
      </div>

      <button type="submit">Submit</button>

    </form>
  </div>);
}