import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../services/database.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Validation} from '../../models/validation';
import swal from 'sweetalert2';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.css']
})
export class ChangeEmailComponent implements OnInit {

  emailForm: FormGroup;
  emailChanged: boolean = false;

  constructor(private databaseservice: DatabaseService, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.emailForm = this.fb.group({
      'email': ['', [Validators.required, Validation.emailValidator]],
      'confirmedEmail': ['', Validators.required],
      'password': ['', Validators.required]
    }, {validator: Validation.checkEmails});
  }

  async changeEmail(newMail: string, newConfirmMail: string, password: string) {
    const user = await this.databaseservice.getLoggedInUser();
    if (newMail === newConfirmMail && user.Email !== newMail) {
      const res = await this.databaseservice.changeEmail(newMail, password);
      if (res) {
        swal.fire(
          'Email was changed!',
          'Continue by clicking the button below.',
          'success'
        );
        this.emailForm.reset({password: '', confirmedEmail: '', email: ''});
      }
      else{
        swal.fire({
          type: 'error',
          title: 'Your old Password was incorrect!',
          text: 'Please try again.',
        });
      }
    }
  }
}
