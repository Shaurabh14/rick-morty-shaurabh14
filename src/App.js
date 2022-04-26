import { Route, Routes } from "react-router-dom";
import Characters from "./Components/Characters/Characters";
import Character from "./Components/Character/Character";
import Search from "./Components/Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Characters />} />
        <Route exact path="/:id" element={<Character />} />
        <Route exact path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
