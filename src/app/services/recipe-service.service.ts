import { Injectable } from '@angular/core';
import {Rezept} from '../models/rezept';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  constructor() { }

  selectedRecipe: Rezept;




}
