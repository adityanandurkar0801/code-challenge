import React, { useEffect, useState } from 'react'
import { PokemonListResponse } from '../../../../apps/app/src/PokemonListResponse';
import './PokemonCard.css'
import { useDispatch, useSelector } from 'react-redux';
import { storePokemon } from '../../redux/pokemonSlice';

const api = "https://pokeapi.co/api/v2/pokemon?limit=151";

export const List = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const dispatch = useDispatch();
  const { pokemons } = useSelector((state: any) => state.pokemon);
  async function getData() {
    try {
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: PokemonListResponse = await response.json();
      setLoading(false);
      dispatch(storePokemon(data.results));
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
    <div className="pokemon-grid">
      {pokemons?.map((pokemon) => (
        <div key={pokemon.id} className="pokemon-card">
          <h3>{pokemon.name}</h3>
        </div>
      ))}
    </div>
  )
}