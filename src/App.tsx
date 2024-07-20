import React from "react";
import Grid from "@mui/material/Grid";
import { TMovieCardProps } from "./types/types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

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
  const movie = {
    title: "Inception",
    snippet: "A thief enters people's dreams to steal their secrets.",
    genres: ["Action", "Adventure", "Sci-Fi"],
    posterUrl:
      "https://i.pinimg.com/736x/9f/ea/1f/9fea1f148d8b1b782d6f7b5ad5f72308.jpg",
  };
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <Box>
          <MovieCard movie={movie} />
        </Box>
      </body>
    </div>
  );
}

export default App;
