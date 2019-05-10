import {async, TestBed} from '@angular/core/testing';

import {RecipeServiceService} from './recipe-service.service';
import {HttpClientModule} from '@angular/common/http';
import {Rezept} from '../models/rezept';
import * as data from '../../assets/response.json';
import {AppModule} from '../app.module';
import {DietFilter} from '../models/dietfilter';



describe('RecipeServiceService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  it('should be created', () => {
    const service: RecipeServiceService = TestBed.get(RecipeServiceService);
    expect(service).toBeTruthy();
  });


  it('should change selected recipe', () => {
    const service: RecipeServiceService = TestBed.get(RecipeServiceService);
    expect(service.selected).toBeUndefined();
    const recipe: Rezept = new Rezept(data.hits[0]);
    service.changeSelected(recipe);
    expect(service.selected.calories).toBeDefined();
  });

  it('should filter calorierange', () => {
    const service: RecipeServiceService = TestBed.get(RecipeServiceService);
    service.addRecipes();
    const min = 1500;
    const max = 2000;
    service.setCalorieRange(min, max);
    service.ApplyFiler();
    let value = false;
    service.recipes.forEach(function (recipe) {
      if (recipe.calories < min || recipe.calories > max) {
        value = true;
      }
    });
    expect(value).toBe(false);
  });

  it('should filter diets', () => {
    const service: RecipeServiceService = TestBed.get(RecipeServiceService);
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
})
;
