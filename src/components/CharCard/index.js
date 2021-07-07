import "./style.css";

function CharCard({ name, status, image, gender, specie }) {
  return (
    <div className="charCard">
      <h3>{name}</h3>
      <img src={image} />
      <spam>Genero: {gender}</spam>
      <spam>Especie: {specie}</spam>
    </div>
  );
}

export default CharCard;
