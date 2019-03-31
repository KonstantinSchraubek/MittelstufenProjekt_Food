import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Validation} from '../../models/validation';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  passwordForm: FormGroup;

  constructor(private router: Router, private databaseService: DatabaseService, private fb: FormBuilder) {}

  ngOnInit() {
    this.passwordForm = this.fb.group({
      'password': ['', [Validators.required, Validation.passwordValidator]],
      'confirmedPassword': ['', Validators.required],
      'oldPassword': ['', Validators.required]
    }, { validator: Validation.checkPasswords });
  }

  async changePassword(newPassword: string, oldPassword: string) {
    const successfulChange = await this.databaseService.changePassword(newPassword, oldPassword);
    if (successfulChange) {
      swal.fire(
        'Password was changed!',
        'Continue by clicking the button below.',
        'success'
      );
      this.passwordForm.reset({password: '', confirmedPassword: '', oldPassword: ''});
    } else {
      swal.fire({
        type: 'error',
        title: 'Your old Password was incorrect!',
        text: 'Please try again.',
      });
    }
  }
}
