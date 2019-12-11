import { NgModule } from '@angular/core';
import { QuickStartComponent } from './quick-start.component';
import { QuickStartRoutingModule } from './quick-start-routing.module';

@NgModule({
  declarations: [
    QuickStartComponent
  ],
  imports: [
    QuickStartRoutingModule,
  ],
  providers: [],
})
export class QuickStartModule {
}
