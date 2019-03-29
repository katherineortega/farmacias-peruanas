import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from './core/not-found/not-found.component';

const routes: Routes = [
  {path: '', loadChildren: './business/business.module#BusinessModule'},
  {path: '**', redirectTo: '404', pathMatch: 'full'},
  {path: '404', component: NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
