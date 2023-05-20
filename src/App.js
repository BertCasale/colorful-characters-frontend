import {Routes, Route} from "react-router-dom"
import './App.css';
import Navbar from "./Components/Navbar.js";
import Home from "./Pages/Home.js";
import NotFound from "./Pages/NotFound.js";

import Games from "./Components/Games.js";
import GameDetails from "./Components/GameDetails.js";
import GameEdit from "./Components/GameEdit.js";
import GameNew from "./Components/GameNew.js";
import GameSearch from "./Components/GameSearch.js";
import Characters from "./Components/Characters.js";
import CharacterDetails from "./Components/CharacterDetails.js";
import CharacterEdit from "./Components/CharacterEdit.js";
import CharacterNew from "./Components/CharacterNew.js";
import CharacterSearch from "./Components/CharacterSearch.js";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/games" element={<Games/>}/>
        <Route path="/games/search" element={<GameSearch/>}/>
        <Route path="/games/:id" element={<GameDetails/>}/>
        <Route path="/games/:id/edit" element={<GameEdit/>}/>
        <Route path="/games/new" element={<GameNew/>}/>
        <Route path="/characters" element={<Characters/>}/>
        <Route path="/characters/search" element={<CharacterSearch/>}/>
        <Route path="/characters/:id" element={<CharacterDetails/>}/>
        <Route path="/characters/:id/edit" element={<CharacterEdit/>}/>
        <Route path="/characters/new" element={<CharacterNew/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
