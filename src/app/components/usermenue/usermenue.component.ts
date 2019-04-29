import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../services/database.service';
import swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usermenue',
  templateUrl: './usermenue.component.html',
  styleUrls: ['./usermenue.component.css']
})
export class UsermenueComponent implements OnInit {
  username: string;
  email: string;

  showPasswordChange: boolean = false;
  showEmailChange: boolean = false;

  constructor(private router: Router,private loginservice: LoginService, private databaseservice: DatabaseService) {
  }


 async ngOnInit() {
    const user = await this.databaseservice.getLoggedInUser()
    this.username = user.Username;
    this.email = user.Email;
   // this.email = await this.databaseservice.getLoggedInUser()
  }

  listFavorites() {
    this.router.navigateByUrl('favorites');
  }

  removeAccount() {
    swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.databaseservice.removeAccount();
        swal.fire(
          'Deleted!',
          'Your Account has been deleted.',
          'success'
        ).then((result) => {
            if(result.value || !result.value) {
              this.loginservice.logoutUser();
              this.router.navigateByUrl('/')
            }
        })
        
      }
    })

  }

}
