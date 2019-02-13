import { Injectable } from '@angular/core';
import {Rezept} from '../models/rezept';
import {HttpClient} from '@angular/common/http';
import {selectValueAccessor} from '@angular/forms/src/directives/shared';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  get recipes(): Rezept[] {
    return this._recipes;
  }
  constructor(private http: HttpClient) {
    this.addRecipes();
  }
  private _recipes: Rezept[] = [];

  public selected: Rezept;
  addRecipes() {
    this.http.get('./assets/response.json').subscribe((data: Object) => {
      data['hits'].forEach(function (recipes) {
        this._recipes.push(new Rezept(recipes));
      }, this);
    });
  }

  changeSelected(nowSelected: Rezept): void {
    this.selected = nowSelected;
  }
}
