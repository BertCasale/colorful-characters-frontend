import Game from "../Components/Game.js";
import Filters from "./Filters.js";
import axios from "axios";
import {useState, useEffect} from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./Games.css"
const API = process.env.REACT_APP_API_URL;

export default function GamesSearch() {
  const [allSearchedGames, setAllSearchedGames] = useState([]);
  const [games, setGames] = useState([]);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("game");

  useEffect(() => {
    axios.get(`${API}/games/search?game=${searchTerm}`)
    .then((res) => {
      setAllSearchedGames(res.data);
      setGames(res.data);
    })
    .catch((e) => console.warn(e));
  }, [searchTerm]);

  return(<div className="Games">
    <h2>Searched Games: {searchTerm}</h2>
  
    <Link to="/games/new"><button className="new-game btn btn-success">New Game</button></Link>

    <div className="d-flex">
      <Filters setData={setGames} allData={allSearchedGames}/>
   
      {games[0] ? 
      <div className="game-list d-flex flex-wrap justify-content-start">
        {games.map((game) => {
          return(<Game key={game.id} game={game}/>)
        })}
      </div>:
      <h1 className="no-results">No results to display.</h1>}
    </div>

  </div>);
}