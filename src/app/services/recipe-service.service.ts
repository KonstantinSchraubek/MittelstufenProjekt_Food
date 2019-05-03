import {Injectable} from '@angular/core';
import {Rezept} from '../models/rezept';
import {DatabaseService} from './database.service';
import {Http} from '@angular/http';
import {DietFilter} from '../models/dietfilter';
import {forEach} from '@angular/router/src/utils/collection';

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
    const res = this.http.get('./assets/response.json');
    res.subscribe(data => {
      const a = JSON.parse(data.text());
      a['hits'].forEach(function (recipes) {

        this._recipes.push(new Rezept(recipes));
      }, this);
    });
  }

  public addDiet(diets: DietFilter[]) {

    const checkedDiets: DietFilter[] = [];
    const filterdRecipes: Rezept[] = [];
    diets.forEach(function (diet) {
      if (diet.checked) {
        checkedDiets.push(diet);
      }
    });

    console.log(this._recipes);
    checkedDiets.forEach(function (diet) {
      console.log(this._recipes);
      this._recipes.forEach(function (recipe) {
        if (recipe.dietLabels === diet.name) {
          filterdRecipes.push(recipe);
        }
      });
    });
    this._recipes = filterdRecipes;
  }


  changeSelected(nowSelected: Rezept): void {
    this.selected = nowSelected;
  }
}
