import { createFeatureSelector } from '@ngrx/store';
import { TvShows } from 'src/app/interfaces/tv-shows';

export const selectTvShows = createFeatureSelector<ReadonlyArray<TvShows>>('tvShows');