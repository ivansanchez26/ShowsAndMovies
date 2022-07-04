import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectMovies } from 'src/app/state/movies/movies.selector';
import { retrievedMovies } from 'src/app/state/movies/movies.actions';
import { selectTvShows } from 'src/app/state/tv-shows/tv-shows.selector';
import { retrievedTvShows } from 'src/app/state/tv-shows/tv-shows.actions';

import { MoviesService } from 'src/app/services/movies/movies.service';
import { TvShowsService } from 'src/app/services/tv-shows/tv-shows.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies$ = this.store.select(selectMovies);
  tvShows$ = this.store.select(selectTvShows);

  constructor(
    private moviesService: MoviesService,
    private tvShowsService: TvShowsService,
    private store: Store
  ) {  }

  listToShow: string = "movies";

  ngOnInit(): void{
    this.moviesService
      .getMovies()
      .subscribe((movies) => this.store.dispatch(retrievedMovies({ movies })));
    this.tvShowsService
      .getTvShows()
      .subscribe((tvShows) => this.store.dispatch(retrievedTvShows({ tvShows })));
  }

  toggleMoviesShows(value: string){
    this.listToShow = value;
  }

}
