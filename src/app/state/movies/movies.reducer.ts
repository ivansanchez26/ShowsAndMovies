import { createReducer, on } from '@ngrx/store';
import { retrievedMovies } from './movies.actions';
import { Movie } from 'src/app/interfaces/movie';

export const initialState: ReadonlyArray<Movie> = [];

export const moviesReducer = createReducer(
  initialState,
  on(retrievedMovies, (state, { movies }) => movies)
);