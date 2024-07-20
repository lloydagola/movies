import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { TMovie } from "../types/types";

type TMovieCardProps = { movie: TMovie };

export default function MovieCard({ movie }: TMovieCardProps): JSX.Element {
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
          <Box>
            {movie.genres.map((genre: string) => (
              <Chip key={genre} label={genre} />
            ))}
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}
