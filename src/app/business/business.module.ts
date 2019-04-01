import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BusinessRoutingModule} from './business-routing.module';
import {BusinessComponent} from './business.component';
import {UserCreatorComponent} from './user/user-creator/user-creator.component';
import {UserListComponent} from './user/user-list/user-list.component';
import {GeneralInformationComponent} from './general-information/general-information.component';
import {UserComponent} from './user/user.component';
import {MatCardModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    BusinessComponent,
    UserCreatorComponent,
    UserListComponent,
    GeneralInformationComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule
  ]
})
export class BusinessModule {
}
