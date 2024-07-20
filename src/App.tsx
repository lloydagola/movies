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

function MovieCard({ movie }: TMovieCardProps): JSX.Element {
  return (
    <Grid item>
      <Card sx={{ width: "280px" }}>
        <CardMedia
          component="img"
          alt={movie.title}
          sx={{ width: "280px" }}
          image={movie.posterUrl}
        />
        <CardContent>
          <Typography variant="h6">{movie.title}</Typography>
          <Typography variant="body2">{movie.snippet}</Typography>
          <div>
            {movie.genres.map((genre: string) => (
              <Chip key={genre} label={genre} />
            ))}
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
}

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
