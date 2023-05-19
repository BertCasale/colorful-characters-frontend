import {Routes, Route} from "react-router-dom"
import './App.css';
import Navbar from "./Components/Navbar.js";
import Home from "./Pages/Home.js";
import NotFound from "./Pages/NotFound.js";

import Games from "./Components/Games.js"
import GameDetails from "./Components/GameDetails.js"
import GameEdit from "./Components/GameEdit";
import GameNew from "./Components/GameNew";
import Characters from "./Components/Characters.js"
import CharacterDetails from "./Components/CharacterDetails.js";
import CharacterEdit from "./Components/CharacterEdit";
import CharacterNew from "./Components/CharacterNew";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/games" element={<Games/>}/>
        <Route path="/games/:id" element={<GameDetails/>}/>
        <Route path="/games/:id/edit" element={<GameEdit/>}/>
        <Route path="/games/new" element={<GameNew/>}/>
        <Route path="/characters" element={<Characters/>}/>
        <Route path="/characters/:id" element={<CharacterDetails/>}/>
        <Route path="/characters/:id/edit" element={<CharacterEdit/>}/>
        <Route path="/characters/new" element={<CharacterNew/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
