import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipeViewComponent} from './views/recipe-view/recipe-view.component';

const routes: Routes = [
  {path: 'list', component: RecipeViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
