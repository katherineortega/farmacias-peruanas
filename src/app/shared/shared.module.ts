import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {User} from "./models/user";
import {FirebaseService} from "./services/firebase/firebase.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    User,
    FirebaseService
  ]
})
export class SharedModule {
}
