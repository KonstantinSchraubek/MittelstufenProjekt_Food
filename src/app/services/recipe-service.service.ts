import { Injectable } from '@angular/core';
import { Rezept } from '../models/rezept';
import { DatabaseService } from './database.service';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  get recipes(): Rezept[] {
    return this._recipes;
  }
  constructor(private http: Http, private databaseService: DatabaseService) {
  }
  private _recipes: Rezept[] = [];

  public selected: Rezept;
  async addRecipes(ingredients?: string) {
    // codezeilen um über die API zu arbeiten -> API ID und KEY müssen eventuell in Server.js gesetzt werden
    // const rezepte = await this.databaseService.getRezepte(ingredients)
    // rezepte['hits'].forEach(function (recipes) {
    //   this._recipes.push(new Rezept(recipes));
    // }, this);

    // Nur für Offline Nutzung
    const res = this.http.get('./assets/response.json')
    res.subscribe(data => {
      const a = JSON.parse(data.text())
      a['hits'].forEach(function (recipes) {
        this._recipes.push(new Rezept(recipes));
      }, this);
    });
  }

  changeSelected(nowSelected: Rezept): void {
    this.selected = nowSelected;
  }
}
