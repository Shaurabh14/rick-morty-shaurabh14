import React from "react";
import { useParams } from "react-router-dom";
import { useCharacter } from "../../Hooks/useCharacter";
import "./Character.css";

const Character = () => {
  const { id } = useParams();
  const { data, loading, error } = useCharacter(id);

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error...</div>;
  }
  return (
    <div className="Character">
      <img
      className="character-image"
        alt={data.character.name}
        src={data.character.image}
        width={750}
        height={750}
      />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
      </div>
      <div className="Character-episode">
        {data.character.episode.map((episode) => {
          return (
            <div key={episode.id}>
              {episode.name} - <b>{episode.episode}</b>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Character;
