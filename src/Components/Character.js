import { Link } from "react-router-dom"; 

export default function Character({character}) {
  return(<div className="Character">
    <Link to={`/characters/${character.id}`}>
      <div className="card">
        <img src={character.image} alt={character.name} width="150px" className="card-img-top"/>
        <div className="card-body">
          <h2 className="card-title">{character.name}</h2>
          <h5 className="card-text">{character.game}</h5>
          {character.lgbt ? <h4 className="card-text">LGBTQ: {character.lgbt_type}</h4> : null}
          {character.poc ? <h4 className="card-text">Person of Color: {character.poc_type}</h4> : null}
          {character.disability ? <h4 className="card-text">Disabled: {character.disability_type}</h4> : null}
        </div>
      </div>
    </Link>
  </div>);
}