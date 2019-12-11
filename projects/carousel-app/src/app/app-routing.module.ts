import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { documentationUrl, quickStartUrl } from './core/const/constants';


const routes: Routes = [{
  path: documentationUrl,
  loadChildren: () => import('./docs/docs.module').then(m => m.DocsModule)
}, {
  path: quickStartUrl,
  loadChildren: () => import('./quick-start/quick-start.module').then(m => m.QuickStartModule)
}, {
  path: '',
  redirectTo: `/${documentationUrl}`,
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
