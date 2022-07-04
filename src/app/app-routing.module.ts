import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { TvShowsDetailsComponent } from './components/tv-shows-details/tv-shows-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie_details/:movieId', component: MovieDetailsComponent },
  { path: 'tv_show_details/:tvShowId', component: TvShowsDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
