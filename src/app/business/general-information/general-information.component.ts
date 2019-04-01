import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {User} from "../../shared/models/user";
import {FirebaseService} from "../../shared/services/firebase/firebase.service";

@Component({
  selector: 'farmacias-peruanas-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.sass']
})
export class GeneralInformationComponent implements OnInit {

  items: Observable<User[]>;

  constructor(private _FirebaseService: FirebaseService) {
  }

  ngOnInit() {
    this.getUserList();
  }

  getDate(date) {
    const dateToMillis = date.toMillis();
    const newDate = new Date(dateToMillis);
    return newDate.getDay() + '/' + newDate.getMonth() + '/' + newDate.getFullYear();
  };

  predictionOfDeath(date, age) {
    const days = Math.floor(Math.random() * age) + 1;
    const dateToMillis = date.toMillis();
    const newDate = new Date(dateToMillis);
    newDate.setDate(newDate.getDate() + days);
    return newDate.getDay() + '/' + newDate.getMonth() + '/' + newDate.getFullYear();
  }

  getUserList() {
    this.items = this._FirebaseService.getUserList();
    this.items.subscribe(() => {

    })
  }
}
