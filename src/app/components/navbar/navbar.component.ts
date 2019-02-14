import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  public loggedIn: boolean = true;

  ngOnInit() {
  }

  logOutUser(): void{
    this.loggedIn = false;
  }

  logInUser(): void{
    this.loggedIn = true;
  }

}
