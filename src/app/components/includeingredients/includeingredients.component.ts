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
    if (ingredients !== '') {
      this._includeIngredients.push(ingredients);
    }
    this.service.setIncludedIngredients(this._includeIngredients);
  }

  Deleted(item: string) {
    const filtered = this._includeIngredients.filter(function (value) {
      return value !== item;
    });
    this._includeIngredients = filtered;
    this.service.setIncludedIngredients(this._includeIngredients);
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
