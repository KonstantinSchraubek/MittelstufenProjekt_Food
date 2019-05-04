import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../services/database.service';
import {ListRecipe} from '../../models/list-recipe';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private databaseService: DatabaseService) {
  }

  history: ListRecipe[] = [];

  ngOnInit() {
    const response = this.databaseService.getHistory();
    response.then((val) => {
      val.forEach(element => {
        console.log(element.RecipeURL + element.RecipeName + element.RecipePicture)
        const hr = new ListRecipe(element.RecipeURL, element.RecipeName, element.RecipePicture);
        this.history.push(hr);
      });
    });
    // alert(this.history.length);
  }

  forwardTo(recipe: ListRecipe) {
    window.location.href = recipe.recipeUrl;
  }

}
