import { TMovie } from "../types/types";

// Function to filter data based on search query
export default function filterMovies(
  query: string,
  movies: TMovie[]
): TMovie[] {
  if (!query) {
    return movies;
  } else {
    return movies.filter((movie: TMovie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
  }
}
