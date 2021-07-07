import "./style.css";
import CharCard from "../CharCard";

function Characters({ characterList }) {
  return (
    <>
      <h1>Meus personagens</h1>
      <div className="charList">
        {characterList.map((char) => (
          <CharCard
            key={char.id}
            name={char.name}
            status={char.status}
            image={char.image}
            specie={char.species}
            gender={char.gender}
          />
        ))}
      </div>
    </>
  );
}

export default Characters;
