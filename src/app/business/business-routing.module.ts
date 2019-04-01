import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BusinessComponent} from './business.component';
import {UserComponent} from "./user/user.component";
import {GeneralInformationComponent} from "./general-information/general-information.component";

const routes: Routes = [
  {
    path: '',
    component: BusinessComponent,
    children: [
      {
        path: '',
        component: UserComponent,
        pathMatch: 'full'
      },
      {
        path: 'informacion-general',
        component: GeneralInformationComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule {
}
