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

  async changeEmail() {
    const user = await this.datsbaseservice.getLoggedInUser();
    if (this.newMail === this.newConfirmMail && user.Email !== this.newMail) {
      alert('test ');
      this.datsbaseservice.changeEmail(this.newMail, this.password);
    }
  }
}
