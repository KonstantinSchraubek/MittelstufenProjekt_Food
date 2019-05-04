import {Component, OnInit} from '@angular/core';
import {RecipeServiceService} from '../../services/recipe-service.service';

@Component({
  selector: 'app-calories-filter',
  templateUrl: './calories-filter.component.html',
  styleUrls: ['./calories-filter.component.css']
})
export class CaloriesFilterComponent implements OnInit {


  constructor(public service: RecipeServiceService) {
  }

  ngOnInit() {
  }

  setValue(range: number) {
    this.service.setCalorieRange(range);
  }
}
