import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { encrypt } from './components/encrypt/encrypt.component';
import { AppComponent } from './app.component';
import { StartseiteComponent } from './components/startseite/startseite.component';

const routes: Routes = [
  { path: 'registration', component: encrypt },
  { path: '',      component: StartseiteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
