import {Component, OnInit} from '@angular/core';
import {RecipeServiceService} from '../../services/recipe-service.service';

@Component({
  selector: 'app-ingredients-filter',
  templateUrl: './ingredients-filter.component.html',
  styleUrls: ['./ingredients-filter.component.css']
})
export class IngredientsFilterComponent implements OnInit {

  constructor(public service: RecipeServiceService) {
  }

  _excludeIngredients: string[] = [];

  textfield: string;

  ngOnInit() {
  }

  Add(ingredients: string) {
    if (ingredients !== '') {
      this._excludeIngredients.push(ingredients);
    }
    this.service.setExcludedIngredients(this._excludeIngredients);
  }

  Deleted(item: string) {
    const filtered = this._excludeIngredients.filter(function (value) {
      return value !== item;
    });
    this._excludeIngredients = filtered;
    this.service.setExcludedIngredients(this._excludeIngredients);
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.Add(this.textfield);
    }
  }

  SetValue(value: string) {
    this.textfield = value;
  }
}
