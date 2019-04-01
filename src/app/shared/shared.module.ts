import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FirebaseService} from "./services/firebase/firebase.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    FirebaseService
  ]
})
export class SharedModule {
}
