import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startseite',
  templateUrl: './startseite.component.html',
  styleUrls: ['./startseite.component.css']
})
export class StartseiteComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  startSearch(ingredients: string) {
    console.log(ingredients)
    let locationString = 'list?ingredients=';
    ingredients.split(',').forEach(ingredient => locationString += ingredient + ',');
    locationString = locationString.slice(0, -1);
    console.log(locationString)
    window.location.href = locationString;
  }
}
