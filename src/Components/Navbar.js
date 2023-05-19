import { Link } from "react-router-dom";
import Logo from "../Assets/ColorfulCharactersLogo.png";
import "./Navbar.css"
;
export default function Navbar() {
  return(<div className="Navbar">
    <Link to="/" className="logo"><img src={Logo} alt="ColorfulCharacters Logo" height="70px"/></Link>
    <Link to="/" className="title"><h1>Colorful Characters</h1></Link>
    <span className="button-span">
      <Link to="/characters" className="characters-button"><button>Characters</button></Link>
    </span>
  </div>);
}