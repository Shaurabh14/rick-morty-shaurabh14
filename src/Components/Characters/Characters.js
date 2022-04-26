import React from "react";
import { Link } from "react-router-dom";
import { useCharacters } from "../../Hooks/useCharacters";
import "./Characters.css";

const Characters = () => {
  const { error, data, loading } = useCharacters();
  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>error...</div>;
  }

  return (
    <div className="Characters">
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`}>
            <img alt={character.name} src={character.image} />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default Characters;
