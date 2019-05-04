import {Component, OnInit} from '@angular/core';
import {RecipeServiceService} from '../../services/recipe-service.service';

// @ts-ignore
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(public service: RecipeServiceService) {
  }

  ngOnInit() {
  }

  filter() {
  this.service.ApplyFiler()
  }
}
