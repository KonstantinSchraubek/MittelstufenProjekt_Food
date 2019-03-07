import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {DatabaseService} from '../../services/database.service';

@Component({
  selector: 'app-registrierung',
  templateUrl: './registrierung.component.html',
  styleUrls: ['./registrierung.component.css']
})
export class RegistrierungComponent implements OnInit {

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
  }

  private addUser(email: string,
                  password: string,
                  confirmedPassword: string,
                  username: string) {
    this.databaseService.addUser(email,password,confirmedPassword,username);
  }

}
