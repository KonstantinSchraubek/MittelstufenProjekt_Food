import {Component, OnInit} from '@angular/core';
import {RecipeServiceService} from '../../services/recipe-service.service';
import {Options} from 'ng5-slider';

@Component({
  selector: 'app-calories-filter',
  templateUrl: './calories-filter.component.html',
  styleUrls: ['./calories-filter.component.css']
})
export class CaloriesFilterComponent implements OnInit {

  minValue = 0;
  maxValue = 5000;
  options: Options = {
    floor: 0,
    ceil: 5000,
    step: 5
  };

  constructor(public service: RecipeServiceService) {
  }

  ngOnInit() {
  }

  setValue() {
    this.service.setCalorieRange(this.minValue, this.maxValue);
  }
}
