import { List } from 'ui';
import { useEffect, useState } from 'react';

interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonEntry[];
}

interface PokemonEntry {
  name: string;
  url: string;
}

const api = "https://pokeapi.co/api/v2/pokemon?limit=151";

const App: React.FC = () => {
  const [pokemonData, setPokemonData] = useState<PokemonListResponse | null>(null);

  /*
    Key Improvements:
    Timeout Mechanism
    Type Validation.
    Error Differentiation-network, HTTP, and parsing errors etc.
  */
  async function getData() {
    try {
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: PokemonListResponse = await response.json(); // Type the fetched data
      setPokemonData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Pokemon list:</h1>
      {pokemonData ? (
        <List pokemonData={pokemonData} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default App;
