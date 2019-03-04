import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.css']
})
export class ChangeEmailComponent implements OnInit {

  constructor() { }

  public password: string;
  public newMail: string;

  public error: string;

  ngOnInit() {
  }

  changeEmail(): void{
    this.error = "this works, test error lol";
  }

}
