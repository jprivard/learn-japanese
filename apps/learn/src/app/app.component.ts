import { Component } from '@angular/core';
import { WanikaniFacade, Filter } from '@japanese/wanikani';

@Component({
  selector: 'japanese-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isLoading$ = this.wanikani.isLoading$;
  public filtered$ = this.wanikani.filtered$;
  public filter$ = this.wanikani.filter$;
  public options = this.wanikani.getFilterOptions();

  constructor(private wanikani: WanikaniFacade) {
    this.wanikani.loadByReview();
  }

  public filter(filter: Filter) {
    this.wanikani.filterBy(filter);
  }
}
