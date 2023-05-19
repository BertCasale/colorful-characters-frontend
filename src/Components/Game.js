import { Link } from "react-router-dom"; 
import "./Game.css";

export default function Game({game}) {
  return(<div className="Game">
    <Link to={`/games/${game.id}`}>
      <div className="card">
        <img src={game.image} alt={game.name} width="150px" className="card-img-top"/>
        <div className="card-body">
          <h2 className="card-title">{game.name}</h2>
          <h5 className="card-text">{game.release}</h5>
          {game.lgbt ? <h4 className="card-text">LGBTQ: ⭐️</h4> : null}
          {game.poc ? <h4 className="card-text">Person of Color: ⭐️</h4> : null}
          {game.disability ? <h4 className="card-text">Disabled: ⭐️</h4> : null}
        </div>
      </div>
    </Link>
  </div>);
}