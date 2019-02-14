import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor() { }

  public oldPassword: string;
  public newPassword: string;
  public repeatNewPassword: string;

  public error: string;

  ngOnInit() {
  }

  changePassword(): void{
    console.log(this.oldPassword + " " + this.newPassword + " " + this.repeatNewPassword);
    this.newPassword = "";
    this.oldPassword = "";
    this.repeatNewPassword = "";
    this.error = "testError";
  }
}
