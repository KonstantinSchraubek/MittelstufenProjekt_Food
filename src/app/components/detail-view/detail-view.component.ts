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

  get selected(): Rezept {
    return this.recipeService.selectedRecipe;
  }

  ngOnInit() {

  }

}
