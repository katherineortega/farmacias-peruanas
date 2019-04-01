import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FirebaseService} from "../../../shared/services/firebase/firebase.service";

@Component({
  selector: 'farmacias-peruanas-user-creator',
  templateUrl: './user-creator.component.html',
  styleUrls: ['./user-creator.component.sass']
})
export class UserCreatorComponent implements OnInit {
  public userForm: FormGroup;

  constructor(private _FirebaseService: FirebaseService) {
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      birthdate: new FormControl(),
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.userForm.controls[controlName].hasError(errorName);
  };

  saveUser(validForm) {
    if (this.userForm.valid) {
      this.addUser(validForm);
    }
  }


  addUser(form) {
    this._FirebaseService.postUser(form).then((data) => {
      this.userForm.reset();
    })
  }
}
