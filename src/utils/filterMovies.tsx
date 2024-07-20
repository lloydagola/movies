import { TMovie } from "../types/types";

// Function to filter data based on search query
export default function filterMovies(
  query: string,
  movies: TMovie[]
): TMovie[] {
  console.log("filter movies...");
  if (!query) {
    return [];
  }
  if (!movies || movies.length < 1) return [];

  return movies.filter((movie: TMovie) =>
    movie.title.trim().toLowerCase().includes(query.toLowerCase())
  );
}
