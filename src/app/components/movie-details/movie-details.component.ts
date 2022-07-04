import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../interfaces/movie';
import { MovieDetails } from 'src/app/interfaces/movie-details';
import { MoviesService } from '../../services/movies/movies.service';
import { GeneralService } from 'src/app/services/general.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  selectedMovie: MovieDetails | undefined;
  relatedMovies: Movie[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private generalService : GeneralService,
    private router: Router
  ) {}

  

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const movieId = params['movieId'];
      this.generalService.scrollToTop();
      this.getSelectedMovie(movieId);
      this.getRelatedMovies(movieId); 
    });
  }

  private getSelectedMovie(movieId: number) {
    this.moviesService.getMovieDetails(movieId).subscribe(
      movieDetails => this.selectedMovie = movieDetails
    )
  }

  private getRelatedMovies(movieId: number){
    this.moviesService.getRelatedMovies(movieId).subscribe(
      movies => this.relatedMovies = movies
    )
  }

  clickRelatedMovie(movie: Movie):void{
    this.moviesService.navigateToDetails(movie.id);
  }
}
