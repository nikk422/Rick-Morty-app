import { Routes , Route } from "react-router";
import "./App.css";
import Header from "./Componants/Header";
import CharacterDetail from "./Pagess/CharacterDetail";
import FavouriteList from "./Pagess/Favourite/FavouriteList";
import Home from "./Pagess/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/charDetail/:characterId" element={<CharacterDetail/>}/>
        <Route path="/favourit" element={<FavouriteList/>}/>
      </Routes>
    </div>
  );
}

export default App;
