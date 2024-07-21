import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { TMovie } from "../types/types";
import { memo } from "react";

type TMovieCardProps = { movie: TMovie };

function MovieCard({ movie }: TMovieCardProps): JSX.Element {
  return (
    <Grid item>
      <Card sx={{ width: "280px", height: "auto" }}>
        <CardMedia
          loading="lazy"
          component="img"
          alt={movie.title}
          sx={{ width: "280px" }}
          image={
            movie.posterUrl ||
            "https://cringemdb.com/img/movie-poster-placeholder.png"
          }
        />
        <CardContent>
          <Typography variant="h6">{movie.title}</Typography>
          <Typography variant="body2">{movie.snippet}</Typography>

          <Box>
            <Typography>
              Rating: <Chip key={movie?.rating} label={movie?.rating} />
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default memo(MovieCard);
