import { Link } from "react-router-dom";
import Logo from "../Assets/ColorfulCharactersLogo.png";
import Searchbar from "./Searchbar";
import "./Navbar.css"
;
export default function Navbar() {
  return(<div className="Navbar">
    <div className="links">
      <div className="logo">
        <Link to="/" ><img src={Logo} alt="ColorfulCharacters Logo" height="70px"/></Link>
      </div>
      <div className="title">
        <Link to="/" ><h1>Colorful Characters</h1></Link>
      </div>
      <div className="button-span">
        <Link to="/characters"><button className="btn btn-primary characters-button">Characters</button></Link>
        <Link to="/games"><button className="btn btn-primary games-button">Games</button></Link>
      </div>
    </div>
    
    <Searchbar/>

  </div>);
}