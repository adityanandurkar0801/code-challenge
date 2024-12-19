export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonEntry[];
}
export interface PokemonEntry {
  name: string;
  url: string;
}
