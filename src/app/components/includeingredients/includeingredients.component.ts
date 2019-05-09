import {Component, OnInit} from '@angular/core';
import {RecipeServiceService} from '../../services/recipe-service.service';

@Component({
  selector: 'app-includeingredients',
  templateUrl: './includeingredients.component.html',
  styleUrls: ['./includeingredients.component.css']
})
export class IncludeingredientsComponent implements OnInit {

  constructor(public service: RecipeServiceService) {
  }

  _includeIngredients: string[] = [];
  textfield: string;

  ngOnInit() {
  }

  Add(ingredients: string) {
    ingredients = ingredients.toLowerCase();
    if (ingredients !== '' && this._includeIngredients.indexOf(ingredients) === -1) {
      this._includeIngredients.push(ingredients);
    }
    this.service.setIncludedIngredients(this._includeIngredients);
    this.service.setIncludedIngredients(this._includeIngredients);
  }

  Deleted(item: string) {
    this._includeIngredients = this._includeIngredients.filter(function (value) {
      return value !== item;
    });
    this.service.setIncludedIngredients(this._includeIngredients);
  }

  onKeydown(event: KeyboardEvent, value: string) {
    if (event.key === 'Enter') {
      this.Add(this.textfield);
    } else {
      this.textfield = value;
    }
  }
}
