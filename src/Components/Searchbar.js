import {useNavigate} from "react-router-dom";
import { useState } from "react";

export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleCharacterSearch = (event) => {
    event.preventDefault();
    setSearchTerm("");
    navigate(`/characters/search?character=${searchTerm}`);
  }

  const handleGameSearch = (event) => {
    event.preventDefault();
    setSearchTerm("");
    navigate(`/games/search?game=${searchTerm}`);
  }

  return (<div className="Searchbar">
    <form>
      <input type="text" placeholder="Search..." onChange={handleSearchTerm} value={searchTerm}/> 
      <button onClick={handleCharacterSearch}>Search Characters</button>
      <button onClick={handleGameSearch}>Search Games</button>
    </form>
  </div>)
}