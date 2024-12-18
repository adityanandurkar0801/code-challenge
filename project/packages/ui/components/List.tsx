import React from 'react'
import { PokemonListResponse } from '../../../apps/app/src/PokemonListResponse';
interface pokemonDataProps{
  pokemonData: PokemonListResponse | null;
}
export const List = (props: pokemonDataProps) => {
  const { pokemonData = []} = props;
  return (
  <div>
    <p>List</p>
     {pokemonData?.results?.map((pokemon, index) => (
        <div key={index}>
          <span>{pokemon?.name}</span>
        </div>
      ))}
    </div>
    )
}