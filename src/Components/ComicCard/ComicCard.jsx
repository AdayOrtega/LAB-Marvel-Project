import React from "react";
import './ComicCard.css';

function ComicCard({ result }) {
  console.log(result);

  return (
    <div className="result">
      {result && result.results && result.results.map(character => (
        <div key={character.id}>
          <ul>{character.name} Resultado</ul>
          <img src={character.image} alt={character.name} />
        </div>
      ))}
    </div>
  );
}

export default ComicCard;
