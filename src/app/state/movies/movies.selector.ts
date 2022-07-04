import { createFeatureSelector } from '@ngrx/store';
import { Movie } from 'src/app/interfaces/movie';

export const selectMovies = createFeatureSelector<ReadonlyArray<Movie>>('movies');