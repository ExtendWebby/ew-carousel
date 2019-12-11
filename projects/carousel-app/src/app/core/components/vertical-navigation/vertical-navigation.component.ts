import { ChangeDetectionStrategy, Component } from '@angular/core';
import { documentationUrl, quickStartUrl } from '../../const/constants';

@Component({
  selector: 'app-vertical-navigation',
  templateUrl: './vertical-navigation.component.html',
  styleUrls: ['./vertical-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerticalNavigationComponent {
  readonly documentationUrl = documentationUrl;
  readonly quickStartUrl = quickStartUrl;

  constructor() {
  }
}
