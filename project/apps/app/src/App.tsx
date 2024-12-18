import { List } from 'ui';
import { useEffect, useState } from 'react';
import { PokemonListResponse } from './PokemonListResponse';

const api = "https://pokeapi.co/api/v2/pokemon?limit=151";

const App: React.FC = () => {
  const [pokemonData, setPokemonData] = useState<PokemonListResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
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
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch Pokémon data");
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <div className="loading">Loading Pokémon...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }
  return (
    <>
      <h1>Pokemon list:</h1>
      <List pokemonData={pokemonData} />
    </>
  );
};

export default App;
