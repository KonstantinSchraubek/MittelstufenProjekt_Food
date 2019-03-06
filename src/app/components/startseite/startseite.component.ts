import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-startseite',
  templateUrl: './startseite.component.html',
  styleUrls: ['./startseite.component.css']
})
export class StartseiteComponent implements OnInit {
  constructor(private r: Router) { }

  ngOnInit() {
  }

  startSearch(ingredients: string) {
    ingredients = ingredients.replace(/,/g, '+')
    this.r.navigate(['/list'], {queryParams: {ingredients: ingredients}});
  }
}
