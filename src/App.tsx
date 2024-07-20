import { useState } from "react";
import Box from "@mui/material/Box";

import Movies from "./components/Movies";
import { TMovie } from "./types/types";
import movies from "./_mocks/movies";
import "./App.css";
import SearchBar from "./components/SearchBar";

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
    <div className="App">
      <header className="App-header"></header>
      <body>
        <Box>
          <SearchBar setSearchQuery={setSearchQuery} />
          <Movies movies={dataFiltered} />
        </Box>
      </body>
    </div>
  );
}

export default App;
