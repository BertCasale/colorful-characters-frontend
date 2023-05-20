import { Link } from "react-router-dom";
import Logo from "../Assets/ColorfulCharactersLogo.png";
import Searchbar from "./Searchbar";
import "./Navbar.css"
;
export default function Navbar() {
  return(<div className="Navbar">
    <div className="links">
      <Link to="/" className="logo"><img src={Logo} alt="ColorfulCharacters Logo" height="70px"/></Link>
      <Link to="/" className="title"><h1>Colorful Characters</h1></Link>
      <span className="button-span">
        <Link to="/characters"><button className="btn btn-primary characters-button">Characters</button></Link>
        <Link to="/games"><button className="btn btn-primary games-button">Games</button></Link>
      </span>
    </div>

    <Searchbar/>

  </div>);
}