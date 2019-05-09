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
  loggedIn = true;

  constructor(private recipeService: RecipeServiceService, private databaseService: DatabaseService) {
  }

  ngOnInit() {

    const response = this.databaseService.checkFavorite(this.selected.label);
    response.then((val) => {
      // alert(val)
      if (val === 'ALREADY_FAVORITE') {
        this.favorite = true;
      }
    });

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();

    this.databaseService.addToHistory(this.selected.url, this.selected.label, this.selected.image, (mm + '/' + dd + '/' + yyyy));
    const userResponse = this.databaseService.getLoggedInUser();
    userResponse.then((val) => {
      if (val === 'NO_LOGGED_IN_USER') {
        this.loggedIn = false;
      }
    });
  }

  addToFav(): void {
    this.databaseService.addToUserFavorits(this.selected.label, this.selected.url, this.selected.image);

    this.favorite = true;
  }

  removeFromFav(): void {
    this.databaseService.removeFromUserFavorites(this.selected.label);

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
    return +this.selected.calories.toFixed(2);
  }


}
