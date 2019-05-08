import {Injectable} from '@angular/core';
import {Rezept} from '../models/rezept';
import {DatabaseService} from './database.service';
import {Http} from '@angular/http';
import {DietFilter} from '../models/dietfilter';
import {Injectable} from '@angular/core';
import {Rezept} from '../models/rezept';
import {DatabaseService} from './database.service';
import {Http} from '@angular/http';
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
  private allrecipes: Rezept[] = [];
  private _mincalories = 0;
  private _maxcalories = 5000;
  private _diets: DietFilter[] = [];
  private _time: number;
  private _excludedIngredients: string[] = [];
  private _includedIngredients: string[] = [];
  public selected: Rezept;



  setCalorieRange(min: number, max: number) {
    this._mincalories = min;
    this._maxcalories = max;
    this.ApplyFiler();
  }

  setExcludedIngredients(ingredients: string[]) {
    this._excludedIngredients = ingredients;
    this.ApplyFiler();
  }

  setIncludedIngredients(ingredients: string[]) {
    this._includedIngredients = ingredients;
    this.ApplyFiler();
  }

  setTime(time: number) {
    this._time = time;
    this.ApplyFiler();
  }

  setDiets(diets: DietFilter[]) {
    this._diets = diets;
    this.ApplyFiler();
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

  private ExcludeIngredients() {
    let filterdRecipes: Rezept[] = this._recipes;
    const excludeIng = this._excludedIngredients;
    if (this._excludedIngredients.length > 0) {
      this._recipes.forEach(function (recipes) {
        recipes.ingredientLines.forEach(function (ingredient) {
          excludeIng.forEach(function (excluIngredients) {
            if (ingredient.includes(excluIngredients.toLowerCase())) {
              filterdRecipes = filterdRecipes.filter(function (value) {
                return value !== recipes;
              });
            }
          });
        });

      });
      this._recipes = filterdRecipes;
    }
  }

  private IncludeIngredients() {
    const map = new Map();
    const tempRecipes: Rezept[] = [];
    const includeIng = this._includedIngredients;
    if (this._includedIngredients.length > 0) {
      this._recipes.forEach(function (recipe) {
        recipe.ingredientLines.forEach(function (ingredient) {
          includeIng.forEach(function (incluIngredient) {
            if (ingredient.includes(incluIngredient.toLowerCase())) {
              if (!map.has(recipe.url)) {
                map.set(recipe.url, true);
                tempRecipes.push(recipe);
              }
            }
          });
        });

      });
      this._recipes = tempRecipes;
    }
  }

  public ApplyFiler() {
    const map = new Map();
    const min = this._mincalories;
    const max = this._maxcalories;
    const tempfilterdRecipes: Rezept[] = [];
    this.allrecipes.forEach(function (recipe) {
      if (recipe.calories < max && recipe.calories > min) {
        if (!map.has(recipe.url)) {
          map.set(recipe.url, true);
          tempfilterdRecipes.push(recipe);
        }
      }
    });
    this._recipes = tempfilterdRecipes;
    this.addDiet();
    this.TimeFilter();
    this.ExcludeIngredients();
    this.IncludeIngredients();
  }

  changeSelected(nowSelected: Rezept): void {
    this.selected = nowSelected;
  }
}
