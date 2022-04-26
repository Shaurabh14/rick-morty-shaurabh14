import { gql, useLazyQuery } from "@apollo/client";
import { React, useState } from "react";

const GET_CHARACTER_LOCATION = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

const Search = () => {
  const [name, setName] = useState("");
  const [getLocations, { loading, error, data }] = useLazyQuery(
    GET_CHARACTER_LOCATION,
    {
      variables: {
        name,
      },
    }
  );
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = () => {
    getLocations();
  };
  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>error...</div>;
  }
  return (
    <div>
      <input value={name} onChange={handleChange} />
      <button onClick={handleSubmit}>Search</button>
      {loading && <div>Loading...</div>}
      {error && <div>Error...</div>}
      {data && (
        <ul>
          {data.characters.results.map((character, index) => {
            return <li key={index}>{character.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Search;
