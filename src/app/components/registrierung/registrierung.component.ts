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

  public onKeydownEmail() {
    this.emailTaken = false;
  }

  public onKeydownUsername() {
    this.usernameTaken = false;
  }

  public async addUser(email: string, password: string, username: string) {
    const response = await this.databaseService.addUser(email, password, username, this.userForm);

    switch (response) {
      case true:
        swal.fire(
          'Registration was successful!',
          'Continue by clicking the button below.',
          'success'
        );
        this.router.navigate(['/']);
        break;
      case 'USERNAME_TAKEN':
        this.usernameTaken = true;
        break;
      case 'EMAIL_TAKEN':
        this.emailTaken = true;
        break;
      default:
        this.emailTaken = true;
        this.usernameTaken = true;
    }
  }
}
