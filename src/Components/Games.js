import Game from "../Components/Game.js";
import Filters from "./Filters.js";
import Searchbar from "./Searchbar.js";
import axios from "axios";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./Games.css"
const API = process.env.REACT_APP_API_URL;

export default function Games() {
  const [allGames, setAllGames] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get(`${API}/games`)
    .then((res) => {
      setAllGames(res.data);
      setGames(res.data);
    })
    .catch((e) => console.warn(e));
  }, []);

  return(<div className="Games">
    <h2>Games</h2>
    <div className="search">
      <Searchbar/>    
      <Link to="/games/new" className="new-game"><button>New Game</button></Link>
    </div>

    <div className="d-flex">
      <Filters setData={setGames} allData={allGames}/>
   

      <div className="game-list d-flex flex-wrap justify-content-start">
        {games.map((game) => {
          return(<Game key={game.id} game={game}/>)
        })}
      </div>
    </div>

  </div>);
}