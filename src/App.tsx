import { useState } from "react";
import Box from "@mui/material/Box";

import Movies from "./components/Movies";
import SearchBar from "./components/SearchBar";

import { TMovie } from "./types/types";
import movies from "./_mocks/movies";
import "./App.css";
// Function to filter data based on search query
function filterMovies(query: string, movies: TMovie[]): TMovie[] {
  if (!query) {
    return movies;
  } else {
    return movies.filter((movie: TMovie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
  }
}

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const dataFiltered = filterMovies(searchQuery, movies);
  return (
    <Box component="main" className="App">
      <Box component="header" className="App-header">
        <SearchBar setSearchQuery={setSearchQuery} />
      </Box>
      <Box component="body">
        <Box component="section">
          <Movies movies={dataFiltered} />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
