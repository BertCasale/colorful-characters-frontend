import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

export default function GameDetails() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [game, setGame] = useState({})
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(`${API}/games/${id}`)
    .then((res) => {
      setGame(res.data)
    })
    .catch((e) => console.warn("catch", e))
  }, [id]);

  useEffect(() => {
    axios.get(`${API}/games/${id}/characters`)
    .then((res) => {
      setCharacters(res.data)
    })
    .catch((e) => console.warn("catch", e))
  }, [id]);

  const deleteGame = () => {
    axios.delete(`${API}/games/${id}`)
    .then(() => {
      navigate("/games");
    })
    .catch((e) => console.warn("catch", e));
  }

  const handleDelete = () => {
    deleteGame()
  }

  return(<div className="GamesDetails">
    <h2>{game.name}</h2>
    <h3>Release: {game.release}</h3>
    <h4>{game.platforms}</h4>
    <img src={game.image} alt={game.name} width="400px"/>
    <p>{game.description}</p>
    <span className="classifications">
      <h5>LGBTQ:{game.lgbt ?  " ⭐️" : " ❌"}</h5> 
      <h5>Person of Color:{game.poc ? " ⭐️" : " ❌"}</h5>
      <h5>Disabled:{game.disability ? " ⭐️"  : " ❌"}</h5>
    </span>

    <Link to={`/games/${id}/edit`}><button>Edit</button></Link>
    <button data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button>
    <Link to="/games"><button>Back to Games</button></Link>


    <div className="modal fade" id="deleteModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          
          <div className="modal-header">
            <h1 className="modal-title">Are you sure you want to delete game!</h1>
          </div>

          <div className="modal-body">
            <button className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button className="btn btn-danger" onClick={handleDelete} data-bs-dismiss="modal">Delete</button>
          </div>

        </div>
      </div>
    </div>

    <div className="game-characters">
      <h3>Characters</h3>
      <Link to="/characters/new"><button>New Character</button></Link>

      {characters[0] ? 
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>LGBTQ</th>
            <th>Person of Color</th>
            <th>Disabled</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character) => {
            return (<tr key={character.id} className="table-info">
              <td><Link to={`/characters/${character.id}`}>{character.name}</Link></td>
              <td>{character.lgbt ? character.lgbt_type : "❌"}</td>
              <td>{character.poc ? character.poc_type : "❌"}</td>
              <td>{character.disability ? character.disability_type : "❌"}</td>
            </tr>)
          })}
        </tbody>
        
      </table>
      : "Please add a character for this game."}
    </div>

  </div>);
}