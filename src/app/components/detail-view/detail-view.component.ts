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
    return this.recipeService.selected;
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

  get digest(): object[]{
    return this.selected.digest;
  }

  get cautions(): string[]{
    return this.selected.cautions;
  }

  get healthlabels() : string[]{
    return this.selected.healthLabels;
  }

  get dietlabels(): string[]{
    return this.selected.dietLabels
  }

  get url(): string{
    return this.selected.url;
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
