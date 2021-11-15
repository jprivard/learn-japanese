import { Component } from '@angular/core';
import { WanikaniFacade } from '@japanese/wanikani';

@Component({
  selector: 'japanese-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'learn';

  constructor(private wanikani: WanikaniFacade) {
    this.wanikani.loadByReview();
  }
}
