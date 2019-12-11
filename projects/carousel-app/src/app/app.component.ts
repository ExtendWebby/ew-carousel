import { Component } from '@angular/core';
import { documentationUrl, quickStartUrl } from './core/const/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly documentationUrl = documentationUrl;
  readonly quickStartUrl = quickStartUrl;
  title = 'carousel-app';

  constructor() {
  }
}
