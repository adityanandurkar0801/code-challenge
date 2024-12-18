import React from 'react'
import { PokemonListResponse } from '../../../../apps/app/src/PokemonListResponse';
import './PokemonCard.css'
interface pokemonDataProps {
  pokemonData: PokemonListResponse | null;
}
export const List = (props: pokemonDataProps) => {
  const { pokemonData = [] } = props;
  return (
    <div className="pokemon-grid">
      {pokemonData?.results?.map((pokemon) => (
        <div key={pokemon.id} className="pokemon-card">
          <h3>{pokemon.name}</h3>
        </div>
      ))}
    </div>
  )
}