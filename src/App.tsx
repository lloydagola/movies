import { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Pagination, Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import theme from "./theme/theme";
import Movies from "./components/Movies";
import SearchBar from "./components/SearchBar";

import "./App.css";
import { BASE_URL } from "./utils/apiUtils";
import { TMovie } from "./types/types";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [movies, setMovies] = useState<TMovie[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const [page, setPage] = useState(1);

  const itemsPerPage = 10;
  const pageCount = Math.ceil(movies?.length / itemsPerPage);

  const search = useCallback((e: any) => {
    setSearchQuery(e.target.value);
  }, []);

  //handle clicking different page on pagination menu
  const handlePageChange = useCallback((_: unknown, page: number) => {
    setLoading(true);
    setPage(page);
    setLoading(false);
  }, []);

  //get API token and save it to state
  useEffect(() => {
    setLoading(true);
    (async function () {
      try {
        const responseData = await fetch(`${BASE_URL}/auth/token`);
        const { token } = await responseData.json();
        setToken(token);
        setLoading(false);
      } catch (e: any) {
        //log error to service
        setLoading(false);
        setError(e);
      }
    })();
  }, []);

  useEffect(() => {
    if (searchQuery === "") return;
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
        `${BASE_URL}/movies?page=${page}&search=${debouncedSearchQuery}`,
        requestOptions
      );
      try {
        const moviesJSON = await fetchData.json();
        if (moviesJSON) setMovies(moviesJSON.data);
      } catch (e: any) {
        //log error to service
        console.log("an error ocurred...", e);
        setError(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [debouncedSearchQuery, page, searchQuery, token]);

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
      const fetchData = await fetch(`${BASE_URL}/movies`, requestOptions);
      try {
        const moviesJSON = await fetchData.json();
        if (moviesJSON) setMovies(moviesJSON.data);
      } catch (e) {
        //log error to service
        console.log("an error ocurred...", e);
        setError(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [page, searchQuery, token]);

  let moviesLength = movies?.length;

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="header"
        className="App-header"
        p={4}
        display="flex"
        flexDirection="row"
        alignItems="center"
      >
        <SearchBar setSearchQuery={search} />
        {movies && (
          <Typography ml={4}>
            {moviesLength === 1
              ? `${moviesLength} result`
              : moviesLength > 1
              ? `${moviesLength} results`
              : "no results"}
          </Typography>
        )}
      </Box>
      {error && (
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h3">An error ocurred...</Typography>
        </Box>
      )}
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
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h3">loading...</Typography>
        </Box>
      )}
    </ThemeProvider>
  );
}

export default App;
