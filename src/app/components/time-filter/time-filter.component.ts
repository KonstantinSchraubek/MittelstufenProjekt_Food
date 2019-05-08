import {Component, OnInit} from '@angular/core';
import {RecipeServiceService} from '../../services/recipe-service.service';

@Component({
  selector: 'app-time-filter',
  templateUrl: './time-filter.component.html',
  styleUrls: ['./time-filter.component.css']
})
export class TimeFilterComponent implements OnInit {

  constructor(public service: RecipeServiceService) {
  }

  ngOnInit() {
  }

  filter(time: number) {
    this.service.setTime(time);
  }
}
