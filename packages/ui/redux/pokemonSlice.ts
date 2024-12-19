import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonState {
  pokemons: Pokemon[];
}

const initialState: PokemonState = {
  pokemons: [],
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    storePokemon: (state, action: PayloadAction<Pokemon[]>) => {
      state.pokemons = action.payload;
    },
    removePokemon: (state, action: PayloadAction<string>) => {
      state.pokemons = state.pokemons.filter(pokemon => pokemon.name !== action.payload);
    },
  },
});

export const { storePokemon, removePokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
