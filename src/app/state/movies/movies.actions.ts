import { createAction, props } from '@ngrx/store';
import { Movie } from 'src/app/interfaces/movie';

export const retrievedMovies = createAction(
  '[Movie List/API] Retrieve Movies Success',
  props<{ movies: ReadonlyArray<Movie> }>()
);