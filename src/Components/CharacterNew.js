import {useState, useEffect} from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

export default function CharacterNew() {
  const {id} = useParams();
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

  const handleTextChange = (event) => {
    setCharacter({...character, [event.target.id]: event.target.value});
  }

  const handleCheckChange = (event) => {
    setCharacter({...character, [event.target.id]: event.target.checked});
  }

  return(<div className="CharacterNew">
    <form>

      <div className="row text-start m-3">

        <div className="col-6">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            className="form-control"
            type="text" 
            placeholder="Name"
            name="name"
            id="name"
            value={character.name}
            onChange={handleTextChange}
            />
        </div>

        <div className="col-6">
        <label htmlFor="game" className="form-label">Game</label>
          <input 
            className="form-control"
            type="text"
            placeholder="Game"
            name="game"
            id="game"
            value={character.game}
            onChange={handleTextChange}/>
        </div>

        <div className="col-12">
        <label htmlFor="description" className="form-label">Description</label>
          <textarea 
            className="form-control"
            type="text"
            placeholder="Description"
            name="description"
            id="description"
            value={character.description}
            onChange={handleTextChange}/>
        </div>
      </div>

      <div className="row m-4">
        <div className="form-check col-4 text-start">
          <input 
            className="form-check-input"
            type="checkbox" 
            name="playable"
            id="playable"
            value={character.playable}
            onChange={handleTextChange}
            />
          <label htmlFor="playable" className="form-check-label">Playable</label>
        </div>

        <div className="form-check col-4 text-start">
          <input 
            className="form-check-input"
            type="checkbox" 
            name="main character"
            id="protagonist"
            value={character.protagonist}
            onChange={handleTextChange}
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
            value={character.lgbt_type}
            onChange={handleTextChange}
            disabled={character.lgbt}/>
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
            value={character.poc_type}
            onChange={handleTextChange}
            disabled={character.poc}/>
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
            value={character.disability_type}
            onChange={handleTextChange}
            disabled={character.disability}/>
        </div>

      </div>

    </form>
  </div>);
}