import {Component, OnInit} from '@angular/core';
import {RecipeServiceService} from '../../services/recipe-service.service';

@Component({
  selector: 'app-excludeingredients-filter',
  templateUrl: './excludeingredients-filter.component.html',
  styleUrls: ['./excludeingredients-filter.component.css']
})
export class ExcludeingredientsFilterComponent implements OnInit {

  constructor(public service: RecipeServiceService) {
  }

  _excludeIngredients: string[] = [];

  textfield: string;

  ngOnInit() {
  }

  Add(ingredients: string) {
    ingredients = ingredients.toLowerCase();
    if (ingredients !== '' && this._excludeIngredients.indexOf(ingredients) === -1) {
      this._excludeIngredients.push(ingredients);
    }
    this.service.setExcludedIngredients(this._excludeIngredients);
  }

  Deleted(item: string) {
    this._excludeIngredients = this._excludeIngredients.filter(function (value) {
      return value !== item;
    });
    this.service.setExcludedIngredients(this._excludeIngredients);
  }

  onKeydown(event: KeyboardEvent, value: string) {
    if (event.key === 'Enter') {
      this.Add(this.textfield);
    } else {
      this.textfield = value;
    }
  }

}
