import { Component, OnInit } from '@angular/core';
import { Benutzer } from '../../models/benutzer';

@Component({
  selector: 'app-registrierung',
  templateUrl: './registrierung.component.html',
  styleUrls: ['./registrierung.component.css']
})
export class RegistrierungComponent implements OnInit {

  testNutzer: Benutzer;

  constructor() { }

  ngOnInit() {
    
  }

}
