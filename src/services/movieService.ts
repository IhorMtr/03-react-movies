import axios from 'axios';
import { type Movie } from '../types/movie.ts';
interface MoviesResponse {
  results: Movie[];
}

export default async function fetchMovies(
  inputQuery: string
): Promise<Movie[]> {
  const apiKey = import.meta.env.VITE_API_KEY;
  const options = {
    method: 'get',
    url: 'https://api.themoviedb.org/3/search/movie',
    params: { query: inputQuery },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  };

  const response = await axios<MoviesResponse>(options);
  return response.data.results;
}
