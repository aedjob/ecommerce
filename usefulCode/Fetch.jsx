// Conecto una API de Pokemon y luego le aplico 'map' para mostrar los resultados en el body

import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/ability/?offset=40&limit=20')
      .then(response => response.json())
      .then(data => setAbilities(data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {abilities.map(ability => (
        <div key={ability.name}>{ability.name}</div>
      ))}
    </div>
  );
}
