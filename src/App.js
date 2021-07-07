import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./components/Character";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [next, setNext] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${next}`)
      .then((results) => results.json())
      .then((results) => setCharacterList(results.results))
      .catch((err) => console.log(err));
  }, [next]);

  function nextPage() {
    setNext(next + 1);
  }
  function previousPage() {
    if (next > 1) {
      setNext(next - 1);
    }
  }
  return (
    <div className="App">
      <div className="App-header">
        <Characters characterList={characterList} />
        <button onClick={nextPage}>Proximo</button>
        <button onClick={previousPage}>Voltar</button>
      </div>
    </div>
  );
}

export default App;
