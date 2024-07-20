import { Dispatch, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import Movies from "./components/Movies";
import { TMovie } from "./types/types";
import movies from "./_mocks/movies";
import "./App.css";

type TSearchBarProps = {
  setSearchQuery: Dispatch<React.SetStateAction<string>>;
};

function SearchBar({ setSearchQuery }: TSearchBarProps): JSX.Element {
  function handleSearch(value: string): void {
    setSearchQuery(value);
  }

  return (
    <form>
      <TextField
        id="search-bar"
        className="text"
        onChange={(e) => handleSearch(e.target.value)}
        type="search"
        placeholder="Search movies..."
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <IconButton type="submit" aria-label="search">
                <SearchIcon style={{ fill: "blue" }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
}

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
