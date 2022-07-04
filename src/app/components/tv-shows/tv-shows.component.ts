import { Component, Input, OnInit } from '@angular/core';
import { TvShows } from 'src/app/interfaces/tv-shows';
import { TvShowsService } from 'src/app/services/tv-shows/tv-shows.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {

  constructor(
    private tvShowsService: TvShowsService
  ) { }

  @Input() tvShows: ReadonlyArray<TvShows> | null = [];


  ngOnInit(): void {
  }

  tvShowClick(tvShow: TvShows){
    this.tvShowsService.navigateToDetails(tvShow.id);
  }

}
