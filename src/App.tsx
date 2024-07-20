import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Pagination } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import theme from "./theme/theme";
import Movies from "./components/Movies";
import SearchBar from "./components/SearchBar";

import filterMovies from "./utils/filterMovies";
import "./App.css";
import { BASE_URL } from "./utils/apiUtils";
import { TMovie } from "./types/types";

function App() {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const [movies, setMovies] = useState<TMovie[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  let dataFiltered: any[] = [];

  if (movies) dataFiltered = filterMovies(searchQuery, movies);
  const itemsPerPage = 10;
  const pageCount = Math.ceil(movies?.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const visibleMovies = movies?.slice(startIndex, startIndex + itemsPerPage);

  function search(val: string) {
    setSearchQuery(val);
    console.log("searching for", val);
  }

  //handle clicking different page on pagination menu
  function handlePageChange(_: unknown, page: number) {
    setLoading(true);
    setPage(page);
    setLoading(false);
  }

  //get API token and save it to state
  useEffect(() => {
    setLoading(true);
    (async function () {
      try {
        const responseData = await fetch(`${BASE_URL}/auth/token`);
        const { token } = await responseData.json();
        setToken(token);
        setLoading(false);
      } catch (e) {
        //log error to service
        setLoading(false);
        console.log("an error ocurred...", e);
        setError(e);
      }
    })();
  }, []); /* 

  useEffect(() => {
    console.log({ token });
    if (!token) return;
  }, []); */

  useEffect(() => {
    const requestOptions = {
      method: "GET", // or 'POST', 'PUT', etc.
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json", // Adjust as needed
      },
    };
    setLoading(true);
    (async function () {
      const fetchData = await fetch(
        `${BASE_URL}/movies?page=${page}`,
        requestOptions
      );
      try {
        const moviesJSON = await fetchData.json();
        if (moviesJSON) setMovies(moviesJSON.data);
        console.log(moviesJSON.data);
        setLoading(false);
      } catch (e) {
        //log error to service
        setLoading(false);
        console.log("an error ocurred...", e);
        setError(e);
      }
    })();
  }, [page, token]);

  /* console.log(movies); */

  return (
    <ThemeProvider theme={theme}>
      <Box component="header" className="App-header">
        <SearchBar setSearchQuery={search} />
      </Box>
      {movies?.length && !loading ? (
        <Box component="main" className="App">
          <Box component="body">
            <Box component="section">
              <Movies movies={movies} />
            </Box>
            <Box component="footer">
              <Pagination
                color="primary"
                count={pageCount}
                page={page}
                onChange={handlePageChange}
              />
            </Box>
          </Box>
        </Box>
      ) : (
        <p>loading...</p>
      )}
    </ThemeProvider>
  );
}

export default App;
