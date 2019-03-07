import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { FormBuilder, Validators, FormGroup, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Validation } from '../../models/validation'
import { Encrypt } from '../../models/encrypt';

@Component({
  selector: 'app-registrierung',
  templateUrl: './registrierung.component.html',
  styleUrls: ['./registrierung.component.css']
})
export class RegistrierungComponent implements OnInit {

  userForm: FormGroup;

  constructor(private databaseService: DatabaseService, private fb: FormBuilder) {
    this.userForm = fb.group({
      'email': ['', [Validators.required, Validation.emailValidator]],
      'username': ['', Validators.required],
      'password': ['', [Validators.required, Validation.passwordValidator]],
      'confirmedPassword': ['', [Validators.required, Validation.passwordValidator]]
    }, {validator: Validation.checkPasswords })
  }

  ngOnInit() {
  }

  public addUser(email: string,
    password: string,
    username: string) {
    this.databaseService.addUser(email, password, username, this.userForm);
  }

  public authenticateUser() {
   const a = this.databaseService.authenticateUser("frosor123","123456");
   a.then(function(result) {
     alert(result)
});
  }
}
