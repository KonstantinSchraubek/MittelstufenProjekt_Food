import {Component, OnInit} from '@angular/core';
import {RecipeServiceService} from '../../services/recipe-service.service';
import * as data from '../../../assets/ingredients.json';
import {DropdownSettings} from 'angular2-multiselect-dropdown/lib/multiselect.interface';

@Component({
  selector: 'app-includeingredients',
  templateUrl: './includeingredients.component.html',
  styleUrls: ['./includeingredients.component.css']
})
export class IncludeingredientsComponent implements OnInit {
  constructor(public service: RecipeServiceService) {
  }

  _includeIngredients: string[] = [];

  itemList = [];
  selectedItems = [];
  settings = {};

  ngOnInit() {
    this.itemList = data.ingredients;
    this.settings = {
      singleSelection: false,
      text: 'Filter Ingredients',
      enableSearchFilter: true,
      addNewItemOnFilter: true
    };
  }
  Add(item: {id: string, itemName: string}) {
    console.log(item);
    const ingredient = item.id.toLowerCase();
    if (ingredient !== '' && this._includeIngredients.indexOf(ingredient) === -1) {
      this._includeIngredients.push(ingredient);
    }
    this.service.setIncludedIngredients(this._includeIngredients);
  }
  onAddItem(newItem: string) {
    this.itemList.push({'id': newItem.toLowerCase(), 'itemName': newItem});
    this.selectedItems.push({'id': newItem.toLowerCase(), 'itemName': newItem});
    this.Add({'id': newItem.toLowerCase(), 'itemName': newItem});
  }
  Deleted(item: {id: string, itemName: string}) {
    this._includeIngredients = this._includeIngredients.filter(function (value) {
      return value !== item.id;
    });
    this.service.setIncludedIngredients(this._includeIngredients);
  }
}
