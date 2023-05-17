import { Link } from "react-router-dom";
import Logo from "../Assets/ColorfulCharactersLogo.png"

export default function Navbar() {
  return(<div className="Navbar">
    <Link to="/"><img src={Logo} alt="ColorfulCharacters Logo" height="70px"/></Link>
    <Link to="/characters"><button>Characters</button></Link>
    <Link to="/characters/new"><button>New</button></Link>
  </div>);
}