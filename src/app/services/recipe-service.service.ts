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
  constructor(private http: HttpClient) {
  }
  private _recipes: Rezept[] = [];

  public selected: Rezept;
  addRecipes(ingredients?: string) {
    let url = 'http://localhost:3000/rezepte?ingredients=';
    url += encodeURIComponent(ingredients);
    this.http.get(url).subscribe((data: Object) => {
      data['hits'].forEach(function (recipes) {
        this._recipes.push(new Rezept(recipes));
      }, this);
    });
  }

  changeSelected(nowSelected: Rezept): void {
    this.selected = nowSelected;
  }
}
