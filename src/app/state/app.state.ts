import { Movie } from "../interfaces/movie";
import { TvShows } from "../interfaces/tv-shows";

export interface AppState {
  movies: ReadonlyArray<Movie>;
  tvShows: ReadonlyArray<TvShows>;
}