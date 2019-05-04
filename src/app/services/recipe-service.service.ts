import {Injectable} from '@angular/core';
import {Rezept} from '../models/rezept';
import {DatabaseService} from './database.service';
import {Http} from '@angular/http';
import {DietFilter} from '../models/dietfilter';

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
  private allrecipes: Rezept[] = [];
  private _calorierange = 0;
  public selected: Rezept;


  setCalorieRange(range: number) {
    this._calorierange = range;
  }
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
        this.allrecipes.push(new Rezept(recipes));
      }, this);
    });
    this._recipes = this.allrecipes;
  }

  public addDiet(diets: DietFilter[]) {
    const map = new Map();
    const checkedDiets: DietFilter[] = [];
    const filterdRecipes: Rezept[] = [];
    const tempdiets: Rezept[] = this.allrecipes;
    diets.forEach(function (diet) {
      if (diet.checked) {
        checkedDiets.push(diet);
      }
    });
    if (checkedDiets.length > 0) {
      checkedDiets.forEach(function (diet) {
        tempdiets.forEach(function (recipe) {
          recipe.dietLabels.forEach(function (dietlabel) {
            if (dietlabel === diet.name) {
              if (!map.has(recipe.url)) {
                map.set(recipe.url, true);
                filterdRecipes.push(recipe);
              }
            }
          });
        });
      });
      this._recipes = filterdRecipes;
    } else {
      this._recipes = this.allrecipes;
    }
  }

  public ApplyFiler() {
    console.log(this._calorierange);
    const tempcalorierange = this._calorierange;
    const tempfilterdRecipes: Rezept[] = [];
    if (tempcalorierange !== 0) {
      console.log(this._calorierange);
      this.allrecipes.forEach(function (recipe) {
        if (recipe.calories < tempcalorierange) {
          tempfilterdRecipes.push(recipe);
        }
      });
      this._recipes = tempfilterdRecipes;
    } else {
    }
  }

  changeSelected(nowSelected: Rezept): void {
    this.selected = nowSelected;
  }
}
