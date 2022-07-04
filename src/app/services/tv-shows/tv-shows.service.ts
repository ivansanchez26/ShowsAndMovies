import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TvShowsDetails } from 'src/app/interfaces/tv-shows-details';
import { TvShows } from '../../interfaces/tv-shows';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getTvShows(): Observable<Array<TvShows>> {
    return this.http
      .get<{ results: TvShows[] }>(
        environment.baseUrl + '/tv/top_rated?api_key=' + environment.tmdb_api_key
      )
      .pipe(map((tvShows) => tvShows.results || []));
  }

  getTvShowDetails(tvShowId: number): Observable<TvShowsDetails> {
    return this.http
      .get<TvShowsDetails>(
        environment.baseUrl +'/tv/' + tvShowId + '?api_key=' + environment.tmdb_api_key
      );
  }

  getRelatedTvShows(tvShowId: number): Observable<Array<TvShows>> {
    return this.http
      .get<{ results: TvShows[] }>(
        environment.baseUrl + '/tv/' + tvShowId + '/recommendations?api_key=' + environment.tmdb_api_key
      )
      .pipe(map((tvShows) => tvShows.results || []));
  }

  navigateToDetails(tvShowId: number): void{
    this.router.navigate(['tv_show_details/' + tvShowId]);
  }
}
