import { NgModule } from '@angular/core';
import { VerticalNavigationComponent } from './vertical-navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [VerticalNavigationComponent],
  exports: [VerticalNavigationComponent],
  imports: [
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    RouterModule,
  ],
  providers: [],
})
export class VerticalNavigationModule { }
