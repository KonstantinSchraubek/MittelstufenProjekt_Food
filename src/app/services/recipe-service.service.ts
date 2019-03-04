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
  addRecipes(ingredients?: String[]) {
    let url = './rezepte?ingredients=';
    url += ingredients;
    console.log(ingredients)
    this.http.get(encodeURI(url)).subscribe((data: Object) => {
      }
    );
  }

  changeSelected(nowSelected: Rezept): void {
    this.selected = nowSelected;
  }
}
