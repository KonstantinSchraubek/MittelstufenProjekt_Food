import {Component, OnInit} from '@angular/core';
import {RecipeServiceService} from '../../services/recipe-service.service';
import {Rezept} from '../../models/rezept';
import {DatabaseService} from '../../services/database.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

  favorite = false;

  constructor(private recipeService: RecipeServiceService, private databaseService: DatabaseService) {
  }

  ngOnInit() {
    const response = this.databaseService.checkFavorite(this.selected.uri);
    response.then((val) => {
    if (val === 'ALREADY_FAVORITE') {
        this.favorite = true;
    }
    });
  }

  addToFav(): void {
    const id: string = this.selected.uri;

    this.databaseService.addToUserFavorits(id);

    this.favorite = true;
  }

  removeFromFav(): void {
    const id = this.selected.uri;

    this.databaseService.removeFromUserFavorites(id);

    this.favorite = false;
  }

  get selected(): Rezept {
    return this.recipeService.selected;
  }

  get ingridients1(): string[] {
    const test: string[] = [];
    for (let i = 0; i < this.selected.ingredientLines.length / 2; i++) {
      test.push(this.selected.ingredientLines[i]);
    }
    return test;
  }

  get ingridients2(): string[] {
    const test: string[] = [];
    for (let i = this.selected.ingredientLines.length / 2; i < this.selected.ingredientLines.length; i++) {
      test.push(this.selected.ingredientLines[i]);
    }
    return test;
  }

  get digest(): object[] {
    return this.selected.digest;
  }

  get cautions(): string[] {
    return this.selected.cautions;
  }

  get healthlabels(): string[] {
    return this.selected.healthLabels;
  }

  get dietlabels(): string[] {
    return this.selected.dietLabels;
  }

  get url(): string {
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
