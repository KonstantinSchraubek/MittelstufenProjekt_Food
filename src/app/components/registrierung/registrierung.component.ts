import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../services/database.service';
import {FormBuilder, Validators, FormGroup,} from '@angular/forms';
import {Validation} from '../../models/validation';
import {Router} from '@angular/router';
import swal from 'sweetalert2';

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
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      'email': ['', [Validators.required, Validation.emailValidator]],
      'username': ['', [Validators.required, Validation.usernameValidator]],
      'password': ['', [Validators.required, Validation.passwordValidator]],
      'confirmedPassword': ['', [Validators.required]]
    }, {validator: Validation.checkPasswords});
    this.emailTaken = false;
    this.usernameTaken = false;
  }

  public async checkEmail(email: string) {
    const response = await this.databaseService.checkEmail(email);
    if (response === 'EMAIL_TAKEN') {
      this.emailTaken = true;
      this.userForm.controls['email'].setErrors({'incorrect': true});
    } else {
      this.emailTaken = false;
    }
  }

  public async checkUsername(username: string) {
    const response = await this.databaseService.checkUsername(username);
    if (response === 'USERNAME_TAKEN') {
      this.usernameTaken = true;
      this.userForm.controls['username'].setErrors({'incorrect': true});
    } else {
      this.usernameTaken = false;
    }
  }

  public addUser(email: string, password: string, username: string) {
    this.databaseService.addUser(email, password, username);
    swal.fire(
      'Registration was successful!',
      'Continue by clicking the button below.',
      'success'
    );
    this.router.navigate(['/']);
  }
}
