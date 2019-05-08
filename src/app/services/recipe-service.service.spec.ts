import {async, TestBed} from '@angular/core/testing';

import {RecipeServiceService} from './recipe-service.service';
import {HttpClientModule} from '@angular/common/http';
import {Rezept} from '../models/rezept';
import * as data from '../../assets/response.json';
import {AppModule} from '../app.module';
import {DietFilter} from '../models/dietfilter';

let service: RecipeServiceService;
beforeEach(async(() => {



  TestBed.configureTestingModule({
    imports: [
      AppModule
    ]
  })
    .compileComponents();
  service = TestBed.get(RecipeServiceService);
}));

describe('RecipeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should change selected recipe', () => {
    expect(service.selected).toBeUndefined();
    const recipe: Rezept = new Rezept(data.hits[0]);
    service.changeSelected(recipe);
    expect(service.selected.calories).toBeDefined();
  });

  it('should filter calorierange', () => {
    service.addRecipes();
    const range = 1500;
    service.setCalorieRange(10, 2000);
    service.ApplyFiler();
    let value = false;
    service.recipes.forEach(function (recipe) {
      if (recipe.calories < 2000 || recipe.calories > 10) {
        value = true;
      }
    });
    expect(value).toBe(true);
  });

  it('should filter diets', () => {
    service.addRecipes();
    const dietfilter: DietFilter[] = [
      new DietFilter('Low-Fat', true)
    ];
    service.setDiets(dietfilter);
    service.ApplyFiler();
    let value = false;
    service.recipes.forEach(function (recipe) {
      recipe.dietLabels.forEach(function (diets) {
        if ('Low-Fat' === diets) {
          value = true;
        }
      });
    });
    expect(value).toBe(false);
  });
});
