import { useState } from "react";
import Box from "@mui/material/Box";

import Movies from "./components/Movies";
import SearchBar from "./components/SearchBar";

import filterMovies from "./utils/filterMovies";
import movies from "./_mocks/movies";
import "./App.css";
import { Pagination } from "@mui/material";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const dataFiltered = filterMovies(searchQuery, movies);
  const itemsPerPage = 2;
  const pageCount = Math.ceil(dataFiltered.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const visibleMovies = dataFiltered.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  function handlePageChange(_: unknown, page: number) {
    setPage(page);
  }

  return (
    <Box component="main" className="App">
      <Box component="header" className="App-header">
        <SearchBar setSearchQuery={setSearchQuery} />
      </Box>
      <Box component="body">
        <Box component="section">
          <Movies movies={visibleMovies} />
        </Box>
        <Box component="footer">
          <Pagination
            count={pageCount}
            page={page}
            onChange={handlePageChange}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
