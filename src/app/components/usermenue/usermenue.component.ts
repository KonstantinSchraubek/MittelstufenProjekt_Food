import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../services/database.service';

@Component({
  selector: 'app-usermenue',
  templateUrl: './usermenue.component.html',
  styleUrls: ['./usermenue.component.css']
})
export class UsermenueComponent implements OnInit {
  username: string;
  email: string = "sample@mail.de";

  constructor(private databaseservice: DatabaseService) {
  }


 async ngOnInit() {
   let user = await this.databaseservice.getLoggedInUser()
   this.username = user;
   // this.email = await this.databaseservice.getLoggedInUser()
  }

}
