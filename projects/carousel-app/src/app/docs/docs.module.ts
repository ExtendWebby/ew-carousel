import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DocsComponent } from './docs.component';
import { DocsRoutingModule } from './docs-routing.module';

@NgModule({
  declarations: [
    DocsComponent
  ],
  imports: [
    DocsRoutingModule,
  ],
  providers: [],
})
export class DocsModule {
}
