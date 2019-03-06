import { Injectable } from '@angular/core';
import {Rezept} from '../models/rezept';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  get recipes(): Rezept[] {
    return this._recipes;
  }
  private _recipes: Rezept[] = [];
  constructor(private http: HttpClient) {
    this.addRecipes();
  }
  addRecipes() {
    this.http.get('./assets/response.json').subscribe((data: Object) => {
      data['hits'].forEach(function (recipes) {
        this._recipes.push(new Rezept(recipes));
      }, this);
    });
  }

  public selected: Rezept;

  changeSelected(nowSelected: Rezept): void {
    this.selected = nowSelected;
  }
}
