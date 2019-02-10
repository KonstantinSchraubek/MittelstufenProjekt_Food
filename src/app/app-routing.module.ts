import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartseiteComponent} from './components/startseite/startseite.component';

const routes: Routes = [
  { path: '', component: StartseiteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


