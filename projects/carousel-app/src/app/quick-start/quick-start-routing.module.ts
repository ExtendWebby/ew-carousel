import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuickStartComponent } from './quick-start.component';


const routes: Routes = [{
  path: '',
  component: QuickStartComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuickStartRoutingModule {
}
