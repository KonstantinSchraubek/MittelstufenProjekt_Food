import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatabaseService} from '../../services/database.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-startseite',
  templateUrl: './startseite.component.html',
  styleUrls: ['./startseite.component.css']
})
export class StartseiteComponent implements OnInit {
  constructor(private r: Router, private databaseServive: DatabaseService) { }

  ngOnInit() {
  }

  startSearch(ingredients: string) {
    ingredients = ingredients.replace(/,/g, '+')
    this.r.navigate(['/list'], {queryParams: {ingredients: ingredients}});
  }
}
