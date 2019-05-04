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
  private _calorierange = 5000;
  private _diets: DietFilter[] = [];
  private _time: number;
  public selected: Rezept;


  setCalorieRange(range: number) {
    this._calorierange = range;
  }

  setTime(time: number) {
    this._time = time;
  }

  setDiets(diets: DietFilter[]) {
    this._diets = diets;
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

  private addDiet() {
    const map = new Map();
    const checkedDiets: DietFilter[] = [];
    const filterdRecipes: Rezept[] = [];
    const temprecipes: Rezept[] = this._recipes;
    this._diets.forEach(function (diet) {
      if (diet.checked) {
        checkedDiets.push(diet);
      }
    });
    if (checkedDiets.length > 0) {
      checkedDiets.forEach(function (diet) {
        temprecipes.forEach(function (recipe) {
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
    }
  }

  private TimeFilter() {
    const temprecipes: Rezept[] = this._recipes;
    const filterdRecipes: Rezept[] = [];
    const time = this._time;
    if (this._time != null) {
      temprecipes.forEach(function (recipe) {
        if (recipe.totalTime <= time) {
          filterdRecipes.push(recipe);
        }
      });
      this._recipes = filterdRecipes;
    }
  }

  public ApplyFiler() {
    const map = new Map();
    const tempcalorierange = this._calorierange;
    const tempfilterdRecipes: Rezept[] = [];
    if (tempcalorierange !== 0) {
      console.log(this._calorierange);
      this.allrecipes.forEach(function (recipe) {
        if (recipe.calories < tempcalorierange) {
          if (!map.has(recipe.url)) {
            map.set(recipe.url, true);
            tempfilterdRecipes.push(recipe);
          }
        }
      });
      this._recipes = tempfilterdRecipes;
    }
    this.addDiet();
    this.TimeFilter();
  }

  changeSelected(nowSelected: Rezept): void {
    this.selected = nowSelected;
  }
}
