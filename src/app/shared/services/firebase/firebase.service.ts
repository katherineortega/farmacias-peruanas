import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private itemsCollection: AngularFirestoreCollection<User>;

  constructor(private _AngularFirestore: AngularFirestore) {
  }

  public getUserList(): Observable<any[]> {
    return this._AngularFirestore.collection<User>('user').valueChanges();
  }

  public postUser(user: User) {
    return this._AngularFirestore.collection("user").add(user);
  }
}
