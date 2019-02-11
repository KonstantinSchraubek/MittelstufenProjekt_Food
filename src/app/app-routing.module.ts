import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipeViewComponent} from './views/recipe-view/recipe-view.component';
import {StartseiteComponent} from './components/startseite/startseite.component';
import {RegistrierungComponent} from './components/registrierung/registrierung.component';
import {DetailViewComponent} from './components/detail-view/detail-view.component';

const routes: Routes = [
  { path: 'registration', component: RegistrierungComponent },
  { path: '',      component: StartseiteComponent },
  {path: 'list', component: RecipeViewComponent},
  {path: 'details', component: DetailViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }


