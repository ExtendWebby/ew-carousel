import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EwCarouselModule } from 'ew-carousel';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from './core/core.module';
import { MatButtonModule } from '@angular/material/button';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { VerticalNavigationModule } from './core/components/vertical-navigation/vertical-navigation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    EwCarouselModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    ScrollingModule,
    VerticalNavigationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
