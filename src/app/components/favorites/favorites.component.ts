import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';
import { DatabaseService } from 'src/app/services/database.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  ingredients: string;

  constructor(public databaseService: DatabaseService, public service: RecipeServiceService, private route: ActivatedRoute) { }

  // get recipes() {return this.service.recipes; }

    ngOnInit() {}

  testeFavoriten() {
    const response = this.databaseService.getFavorites();
    response.then((val) => {
      val.forEach(element => {
        console.log(element);
      });

    });
  }

  }
