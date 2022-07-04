import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieDetails } from 'src/app/interfaces/movie-details';
import { Movie } from '../../interfaces/movie';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getMovies(): Observable<Array<Movie>> {
    return this.http
      .get<{ results: Movie[] }>(
        environment.baseUrl + '/movie/top_rated?api_key=' + environment.tmdb_api_key
      )
      .pipe(map((movies) => movies.results || []));
  }

  getMovieDetails(movieId: number): Observable<MovieDetails> {
    return this.http
      .get<MovieDetails>(
        environment.baseUrl + '/movie/' + movieId + '?api_key=' + environment.tmdb_api_key
      );
  }

  getRelatedMovies(movieId: number): Observable<Array<Movie>> {
    return this.http
      .get<{ results: Movie[] }>(
        environment.baseUrl + '/movie/' + movieId + '/recommendations?api_key=' + environment.tmdb_api_key
      )
      .pipe(map((movies) => movies.results || []));
  }

  navigateToDetails(tvShowId: number): void{
    this.router.navigate(['movie_details/' + tvShowId]);
  }
}
