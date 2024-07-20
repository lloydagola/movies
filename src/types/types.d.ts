
export type TMovie = {
  title: string;
  snippet: string;
  genres: string[];
  posterUrl: string;
};

export type TMovieCardProps = { movie: TMovie };