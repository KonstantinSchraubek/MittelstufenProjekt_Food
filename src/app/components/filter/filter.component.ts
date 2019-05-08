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

  _showfilter = true;

  toggleButton() {
    this._showfilter = !this._showfilter;
  }

  ngOnInit() {
  }
}
