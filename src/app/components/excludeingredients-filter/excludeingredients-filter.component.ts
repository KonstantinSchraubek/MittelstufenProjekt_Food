import {Component, OnInit} from '@angular/core';
import {RecipeServiceService} from '../../services/recipe-service.service';
import * as data from '../../../assets/ingredients.json';

@Component({
  selector: 'app-excludeingredients-filter',
  templateUrl: './excludeingredients-filter.component.html',
  styleUrls: ['./excludeingredients-filter.component.css']
})
export class ExcludeingredientsFilterComponent implements OnInit {

  constructor(public service: RecipeServiceService) {
  }

  _excludeIngredients: string[] = [];

  itemList = [];
  selectedItems = [];
  settings = {};

  ngOnInit() {
    this.itemList = data.ingredients;
    this.settings = {
      singleSelection: false,
      text: 'Exclude Ingredients',
      enableSearchFilter: true,
      addNewItemOnFilter: true
    };
  }
  Add(item: {id: string, itemName: string}) {
    console.log(item);
    const ingredient = item.id.toLowerCase();
    if (ingredient !== '' && this._excludeIngredients.indexOf(ingredient) === -1) {
      this._excludeIngredients.push(ingredient);
    }
    this.service.setExcludedIngredients(this._excludeIngredients);
  }
  onAddItem(newItem: string) {
    this.itemList.push({'id': newItem.toLowerCase(), 'itemName': newItem});
    this.selectedItems.push({'id': newItem.toLowerCase(), 'itemName': newItem});
    this.Add({'id': newItem.toLowerCase(), 'itemName': newItem});
  }
  Deleted(item: {id: string, itemName: string}) {
    this._excludeIngredients = this._excludeIngredients.filter(function (value) {
      return value !== item.id;
    });
    this.service.setExcludedIngredients(this._excludeIngredients);
  }
}
