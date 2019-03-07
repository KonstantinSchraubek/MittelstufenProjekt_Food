import { Component, OnInit } from '@angular/core';
import {RecipeServiceService} from '../../services/recipe-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  ingredients: string;
  constructor(public service: RecipeServiceService, private route: ActivatedRoute) {
  }
  get recipes() {return this.service.recipes; }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.ingredients = params['ingredients'];
      this.service.addRecipes(this.ingredients);
    });
  }

}
