import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  public loggedIn: boolean = true;

  constructor() { }
  ngOnInit() {
  }
  logOutUser(): void{
    this.loggedIn = false;
  }

}
