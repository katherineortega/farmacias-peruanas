import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {User} from "../../../shared/models/user";
import {FirebaseService} from "../../../shared/services/firebase/firebase.service";

@Component({
  selector: 'farmacias-peruanas-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit, OnDestroy {

  items: Observable<User[]>;
  itemObservable: Subscription;

  public totalUser: number = 0;
  public ageAverage: any = 0;
  public DSage: any = 0;
  public ageRange: string = '';

  constructor(private _FirebaseService: FirebaseService) {

  }

  ngOnInit() {
    this.getUser();
  }

  ngOnDestroy(): void {
    this.itemObservable.unsubscribe();
  }

  getAverageAge(arr) {
    let newArray = [];
    arr.map(item => newArray = item.age ? [...newArray, item.age] : newArray);
    return (newArray.reduce((a, b) => a + b) / newArray.length).toFixed(1)
  }

  getAgeRange(arr) {
    let newArray = [];
    arr.map(item => newArray = item.age ? [...newArray, item.age] : newArray);
    return `${Math.min(...newArray)} - ${Math.max(...newArray)}`
  }

  getStandardDeviation(arr) {
    let newArray = [];
    arr.map(item => newArray = item.age ? [...newArray, item.age] : newArray);
    const media = newArray.reduce((a, b) => a + b) / newArray.length;
    const pow = newArray.map(item => Math.pow((item - media), 2));
    const sum = pow.reduce((a, b) => a + b);
    const divideN = sum / newArray.length;
    const sqrt = Math.sqrt(Math.abs(divideN));
    return sqrt.toFixed(2)
  }

  getUser() {
    this.items = this._FirebaseService.getUserList();
    this.itemObservable = this.items.subscribe((data) => {
      this.totalUser = data.length;
      this.ageAverage = this.getAverageAge(data);
      this.ageRange = this.getAgeRange(data);
      this.DSage = this.getStandardDeviation(data);
    });
  }

}
