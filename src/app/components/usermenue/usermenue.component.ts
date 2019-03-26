import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../services/database.service';

@Component({
  selector: 'app-usermenue',
  templateUrl: './usermenue.component.html',
  styleUrls: ['./usermenue.component.css']
})
export class UsermenueComponent implements OnInit {
  user: string;
  email: string = "sample@mail.de";

  constructor(private databaseservice: DatabaseService) {
  }


 async ngOnInit() {
    this.user = await this.databaseservice.getLoggedInUser()
    alert(this.user)
   // this.email = await this.databaseservice.getLoggedInUser()
  }

}
