import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { FormBuilder, Validators, FormGroup, } from '@angular/forms';
import { Validation } from '../../models/validation';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registrierung',
  templateUrl: './registrierung.component.html',
  styleUrls: ['./registrierung.component.css']
})
export class RegistrierungComponent implements OnInit {

  userForm: FormGroup;
  usernameTaken: boolean;
  emailTaken: boolean;

  constructor(private router: Router, private databaseService: DatabaseService, private fb: FormBuilder) {
    this.userForm = fb.group({
      'email': ['', [Validators.required, Validation.emailValidator]],
      'username': ['', [Validators.required, Validation.usernameValidator]],
      'password': ['', [Validators.required, Validation.passwordValidator]],
      'confirmedPassword': ['', [Validators.required, Validation.passwordValidator]]
    }, { validator: Validation.checkPasswords });
  }

  ngOnInit() {
    this.emailTaken = false;
    this.usernameTaken = false;
  }

  public onKeydown(event) {
    this.usernameTaken = false;
  }

  public async addUser(email: string, password: string, username: string) {
    const response = await this.databaseService.addUser(email, password, username, this.userForm);
    if(response == true) {
      this.router.navigateByUrl('/successfulRegistration');
    }
    else if (response == "USERNAME_TAKEN"){
      this.usernameTaken = true;
    }
    else{
      this.emailTaken = true;
    }
  }
}
