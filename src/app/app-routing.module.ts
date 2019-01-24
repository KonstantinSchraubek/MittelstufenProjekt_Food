import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartseiteComponent } from './components/startseite/startseite.component';
import { RegistrierungComponent } from './components/registrierung/registrierung.component';

const routes: Routes = [
  { path: 'registration', component: RegistrierungComponent },
  { path: '',      component: StartseiteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
