import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvShows } from 'src/app/interfaces/tv-shows';
import { TvShowsDetails } from 'src/app/interfaces/tv-shows-details';
import { TvShowsService } from 'src/app/services/tv-shows/tv-shows.service';
import { GeneralService } from 'src/app/services/general.service';


@Component({
  selector: 'app-tv-shows-details',
  templateUrl: './tv-shows-details.component.html',
  styleUrls: ['./tv-shows-details.component.css']
})
export class TvShowsDetailsComponent implements OnInit {

  selectedTvShow: TvShowsDetails | undefined;
  relatedTvShows: TvShows[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private tvShowsService: TvShowsService,
    private generalService : GeneralService,
  ) {}

  

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const tvShowId = params['tvShowId'];
      this.generalService.scrollToTop();
      this.getSelectedTvShow(tvShowId);
      this.getRelatedTvShows(tvShowId); 
    });
  }

  private getSelectedTvShow(tvShowId: number) {
    this.tvShowsService.getTvShowDetails(tvShowId).subscribe(
      tvShowDetails => this.selectedTvShow = tvShowDetails
    )
  }

  private getRelatedTvShows(tvShowId: number){
    this.tvShowsService.getRelatedTvShows(tvShowId).subscribe(
      tvShows => this.relatedTvShows = tvShows
    )
  }

  clickRelatedTvShow(tvShow: TvShows):void{
    this.tvShowsService.navigateToDetails(tvShow.id);
  }
}
