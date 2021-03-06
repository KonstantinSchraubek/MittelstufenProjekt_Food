import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipeViewComponent} from './views/recipe-view/recipe-view.component';
import {StartseiteComponent} from './components/startseite/startseite.component';
import {RegistrierungComponent} from './components/registrierung/registrierung.component';
import {DetailViewComponent} from './components/detail-view/detail-view.component';
import {UsermenueComponent} from './components/usermenue/usermenue.component';
import {ContactComponent} from './components/contact/contact.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

const routes: Routes = [
  { path: 'registration', component: RegistrierungComponent },
  { path: '',      component: StartseiteComponent },
  {path: 'list', component: RecipeViewComponent},
  {path: 'details', component: DetailViewComponent},
  { path: 'home',      component: StartseiteComponent },
  {path: 'userSettings', component: UsermenueComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'favorites', component: FavoritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true, onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }


