import axios from "axios";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

export default function GameNew() {
  const navigate = useNavigate();
  const [game, setGame] = useState({
    name: "",
    image: "",
    description: "",
    release: "",
    platforms: "",
    lgbt: false,
    poc: false,
    disability: false,
  });

  const handleTextChange = (event) => {
    setGame({...game, [event.target.id]: event.target.value});
  }

  const handleCheckChange = (event) => {
    setGame({...game, [event.target.id]: event.target.checked});
  }


  const addNewGame = (newGame) => {
    axios.post(`${API}/games`, newGame)
    .then(() => {
      navigate("/games");
    })
    .catch((e) => console.warn("catch", e))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (game.lgbt || game.poc | game.disability) {
      addNewGame(game);
    }
  }

  return(<div className="GameNew">
    <form className="needs-validation" onSubmit={handleSubmit}>

      <div className="row text-start m-3">

        <div className="col-6">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            className={`form-control ${game.name ? "is-valid" : "is-invalid"}`}
            type="text" 
            placeholder="Name"
            name="name"
            id="name"
            value={game.name}
            onChange={handleTextChange}
            required/>
          <div className="invalid-feedback">Please enter a name.</div>
        </div>

        <div className="col-6">
          <label htmlFor="release" className="form-label">Release Year</label>
          <input 
            className={`form-select ${game.release ? "is-valid" : "is-invalid"}`}
            type="number"
            placeholder="0000"
            name="release"
            id="release"
            min={1000}
            max={9999}
            value={game.release}
            onChange={handleTextChange}
            required/>     

          <div className="invalid-feedback">Please enter the release year.</div>
        </div>

        <div className="col-12">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea 
            className={`form-control ${game.description ? "is-valid" : "is-invalid"}`}
            type="text"
            placeholder="Description"
            name="description"
            id="description"
            value={game.description}
            onChange={handleTextChange}
            required/>
          <div className="invalid-feedback">Please enter the description.</div>
        </div>

        <div className="col-12">
          <label htmlFor="Image" className="form-label">Image URL</label>
          <input 
            className={`form-control ${game.image ? "is-valid" : "is-invalid"}`}
            type="text"
            placeholder="https://"
            name="image"
            id="image"
            value={game.image}
            onChange={handleTextChange}
            required/>
          <div className="invalid-feedback">Please enter the image URL.</div>
        </div>

        <div className="col-12">
          <label htmlFor="platforms" className="form-label">Platforms</label>
          <input 
            className="form-control"
            type="text" 
            name="platforms"
            id="platforms"
            placeholder=""
            value={game.platforms}
            onChange={handleTextChange}
            />
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
              checked={game.lgbt}
              onChange={handleCheckChange}/>
          </div>
        </div>

        <div className="input-group">
          <div className="input-group-text">Person of Color</div>
          <div className="input-group-text">
            <input 
              className="form-check-input" type="checkbox"
              name="person of color"
              id="poc"
              checked={game.poc}
              onChange={handleCheckChange}/>
          </div>
        </div>

        <div className="input-group">
          <div className="input-group-text">Disabled</div>
          <div className="input-group-text">
            <input 
              className="form-check-input" type="checkbox"
              name="disabled"
              id="disability"
              checked={game.disability}
              onChange={handleCheckChange}/>
          </div>
        </div>

        <div className={`text-start ${!game.lgbt && !game.poc && !game.disability ? "visible" : "invisible"}`}>Please select and enter a value for at least one option above.</div>
      </div>

      <button type="submit">Submit</button>

    </form>
  </div>);
}