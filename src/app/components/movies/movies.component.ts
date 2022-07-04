import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  @Input() movies: ReadonlyArray<Movie> | null = [];


  ngOnInit(): void {
    
  }

  movieClick(movie: Movie){
    this.moviesService.navigateToDetails(movie.id);
  }

}
