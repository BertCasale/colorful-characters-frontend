import {Routes, Route} from "react-router-dom"
import './App.css';
import Navbar from "./Components/Navbar.js";
import Home from "./Pages/Home.js";
import NotFound from "./Pages/NotFound.js";
import Index from "./Pages/Index.js";
import Show from "./Pages/Show.js";
import Edit from "./Pages/Edit.js";
import New from "./Pages/New.js";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/characters" element={<Index/>}/>
        <Route path="/characters/:id" element={<Show/>}/>
        <Route path="/characters/:id/edit" element={<Edit/>}/>
        <Route path="/characters/new" element={<New/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
