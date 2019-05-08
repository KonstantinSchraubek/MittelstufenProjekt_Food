import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';
import { DatabaseService } from 'src/app/services/database.service';
import { ActivatedRoute } from '@angular/router';
import {ListRecipe} from '../../models/list-recipe';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  ingredients: string;

  constructor(public databaseService: DatabaseService, public service: RecipeServiceService, private route: ActivatedRoute) { }

  // get recipes() {return this.service.recipes; }

  favorites: ListRecipe[] = [];

  ngOnInit() {
    const response = this.databaseService.getFavorites();
    response.then((val) => {
      val.forEach(element => {
        console.log(element.RecipeURL + element.RecipeName + element.RecipePicture)
        const hr = new ListRecipe(element.RecipeURL, element.RecipeName, element.RecipePicture);
        this.favorites.push(hr);
      });
    });
    // alert(this.history.length);
  }

  forwardTo(recipe: ListRecipe) {
    window.location.href = recipe.recipeUrl;
  }

  }
