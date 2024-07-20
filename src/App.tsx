import { useState } from "react";
import Box from "@mui/material/Box";

import Movies from "./components/Movies";
import SearchBar from "./components/SearchBar";

import filterMovies from "./utils/filterMovies";
import movies from "./_mocks/movies";
import "./App.css";

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
