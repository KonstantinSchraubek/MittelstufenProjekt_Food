import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../services/database.service';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.css']
})
export class ChangeEmailComponent implements OnInit {

  constructor(private datsbaseservice: DatabaseService) {
  }

  public password: string;
  public newMail: string;
  public newConfirmMail: string;

  public error: string;

  ngOnInit() {
  }

  changeEmail(): void {
    if (this.newMail === this.newConfirmMail) {
      // this.databaseservice.changeMail(this.newMail);
    }
  }
}
