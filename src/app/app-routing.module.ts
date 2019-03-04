import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipeViewComponent} from './views/recipe-view/recipe-view.component';
import {StartseiteComponent} from './components/startseite/startseite.component';
import {RegistrierungComponent} from './components/registrierung/registrierung.component';
import {DetailViewComponent} from './components/detail-view/detail-view.component';
import {UsermenueComponent} from './components/usermenue/usermenue.component';
import { SuccessfulRegistrationComponent } from './components/successful-registration/successful-registration.component';

const routes: Routes = [
  { path: 'registration', component: RegistrierungComponent },
  { path: '',      component: StartseiteComponent },
  {path: 'list', component: RecipeViewComponent},
  {path: 'details', component: DetailViewComponent},
  { path: 'home',      component: StartseiteComponent },
  {path: 'userSettings', component: UsermenueComponent},
  {path: 'successfulRegistration', component: SuccessfulRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }


