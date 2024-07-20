import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { TMovie, TMovieCardProps } from "./types/types";
import movieData from "./_mocks/movies";

import "./App.css";
import Box from "@mui/material/Box";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <Box>
          {movieData.map((movie: TMovie, index: number) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </Box>
      </body>
    </div>
  );
}

export default App;
