import { createAction, props } from '@ngrx/store';
import { TvShows } from 'src/app/interfaces/tv-shows';

export const retrievedTvShows = createAction(
  '[TvShows List/API] Retrieve TvShows Success',
  props<{ tvShows: ReadonlyArray<TvShows> }>()
);