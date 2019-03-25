import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private databaseService: DatabaseService) { }

  public oldPassword: string;
  public newPassword: string;
  public repeatNewPassword: string;

  public error: string;

  ngOnInit() {
  }

  changePassword(): void{
    this.databaseService.changePassword(this.newPassword, this.oldPassword);
  }
}
