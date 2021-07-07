import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./components/Character";

function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((results) => results.json())
      .then((results) => setCharacterList(results.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <Characters characterList={characterList} />
      </div>
    </div>
  );
}

export default App;
