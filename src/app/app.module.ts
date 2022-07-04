import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';



import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';

import { moviesReducer } from './state/movies/movies.reducer';
import { tvShowsReducer } from './state/tv-shows/tv-shows.reducer';

import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { HomeComponent } from './components/home/home.component';
import { TvShowsDetailsComponent } from './components/tv-shows-details/tv-shows-details.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TvShowsComponent,
    MovieDetailsComponent,
    HomeComponent,
    TvShowsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({movies: moviesReducer, tvShows: tvShowsReducer}, {}),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonToggleModule,
    MatListModule,
    MatDividerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
