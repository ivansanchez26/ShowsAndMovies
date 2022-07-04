import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectMovies } from './state/movies/movies.selector';
import { retrievedMovies } from './state/movies/movies.actions';

import { MoviesService } from './services/movies/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  movies$ = this.store.select(selectMovies);

  constructor(
    private moviesService: MoviesService,
    private store: Store
  ) {  }

  listToShow: string = "movies";

  ngOnInit(): void{
    //this.moviesService.getMovies().subscribe((movies) => {this.movies = movies; console.log(movies);})
    this.moviesService
      .getMovies()
      .subscribe((movies) => this.store.dispatch(retrievedMovies({ movies })));
  }

  toggleMoviesShows(value: string){
    this.listToShow = value;
  }



}
