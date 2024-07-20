import Grid from "@mui/material/Grid";
import MovieCard from "./MovieCard";

type TMovieListProps = { movies: any[] };

export default function Movies({ movies }: TMovieListProps): JSX.Element {
  return (
    <Grid
      container
      gap={2}
      m="auto"
      justifyContent="center"
      sx={{
        gridTemplateColumns: "auto-fill, minMax(280px, 1fr)",
        margin: "auto",
      }}
    >
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </Grid>
  );
}
