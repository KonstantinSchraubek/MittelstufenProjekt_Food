import { Component, OnInit } from '@angular/core';
import {RecipeServiceService} from '../../services/recipe-service.service';
import {Rezept} from '../../models/rezept';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

  constructor(private recipeService: RecipeServiceService) { }

  ngOnInit() {

  }

  get selected(): Rezept {
    let r: Rezept[] = this.recipeService.recipes;
    return r[0];
  }

  get ingridients1(): string[] {
    let test: string[] = [];
    for(let i = 0; i < this.selected.ingredientLines.length / 2; i++){
      test.push(this.selected.ingredientLines[i]);
    }
    return test;
  }

  get ingridients2(): string[] {
    let test: string[] = [];
    for(let i = this.selected.ingredientLines.length / 2; i < this.selected.ingredientLines.length; i++){
      test.push(this.selected.ingredientLines[i]);
    }
    return test;
  }

  get time(): number {
    // @ts-ignore
    return this.selected.totalTime.toFixed(2);
  }

  get weight(): number {
    // @ts-ignore
    return this.selected.totalWeight.toFixed(2);
  }

  get calories(): number {
    // @ts-ignore
    return this.selected.calories.toFixed(2);
  }



}