import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../services/database.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Validation} from '../../models/validation';
import {of} from 'rxjs';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.css']
})
export class ChangeEmailComponent implements OnInit {

  userForm: FormGroup;
  emailChanged: boolean = false;

  constructor(private databaseservice: DatabaseService, private fb: FormBuilder) {
    this.userForm = fb.group({
      'email': ['', [Validators.required, Validation.emailValidator]],
      'email2': ['', [Validators.required, Validation.emailValidator2]]
    }, {validator: Validation.checkEmails});
  }


  ngOnInit() {
  }

  async changeEmail(newMail: string, newConfirmMail: string, password: string) {
    const user = await this.databaseservice.getLoggedInUser();
    if (newMail === newConfirmMail && user.Email !== newMail) {
      const res = await this.databaseservice.changeEmail(newMail, password);
      if (res)
        this.emailchanged();
    }
  }

  emailchanged() {
    this.emailChanged = !this.emailChanged;
  }
}
