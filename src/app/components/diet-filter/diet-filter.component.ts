import {Component, OnInit} from '@angular/core';

import {DietFilter} from '../../models/dietfilter';
import {RecipeServiceService} from '../../services/recipe-service.service';

@Component({
  selector: 'app-diet-filter',
  templateUrl: './diet-filter.component.html',
  styleUrls: ['./diet-filter.component.css']
})
export class DietFilterComponent implements OnInit {

  constructor(public service: RecipeServiceService) {
    this._dietArray = [
      new DietFilter('High-Fiber', false),
      new DietFilter('Balanced', false),
      new DietFilter('High-Protein', false),
      new DietFilter('Low-Fat', false),
      new DietFilter('Low-Carb', false),
      new DietFilter('Low-Sodium', false)

    ];
  }

  public _dietArray: DietFilter[];

  ngOnInit() {
  }

  filter() {
    this.service.setDiets(this._dietArray);
  }
}
