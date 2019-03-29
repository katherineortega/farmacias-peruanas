import {Component} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'farmacias-peruanas-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'farmacias-peruanas';
  items: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items = db.collection('user').valueChanges();
    this.items.subscribe((data) => {
      console.log(data);
    });
  }
}
