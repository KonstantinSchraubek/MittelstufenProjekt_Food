import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../services/database.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Validation} from '../../models/validation';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.css']
})
export class ChangeEmailComponent implements OnInit {

  userForm: FormGroup;

  constructor(private datsbaseservice: DatabaseService, private fb: FormBuilder) {
    this.userForm = fb.group({
      'email': ['', [Validators.required, Validation.emailValidator]],
      'email2': ['', [Validators.required, Validation.emailValidator2]]
    }, {validator: Validation.checkEmails});
  }


  ngOnInit() {
  }

  async changeEmail(newMail: string, newConfirmMail: string, password: string) {
    const user = await this.datsbaseservice.getLoggedInUser();
    if (newMail === newConfirmMail && user.Email !== newMail) {
      this.datsbaseservice.changeEmail(newMail, password);
    }
  }
}
