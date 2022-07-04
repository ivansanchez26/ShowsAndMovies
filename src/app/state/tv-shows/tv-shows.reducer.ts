import { createReducer, on } from '@ngrx/store';
import { retrievedTvShows } from './tv-shows.actions';
import { TvShows } from 'src/app/interfaces/tv-shows';

export const initialState: ReadonlyArray<TvShows> = [];

export const tvShowsReducer = createReducer(
  initialState,
  on(retrievedTvShows, (state, { tvShows }) => tvShows)
);