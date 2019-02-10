import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DetailViewComponent } from './components/detail-view/detail-view.component';

import {StartseiteComponent} from './components/startseite/startseite.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeServiceService} from './services/recipe-service.service';
import {HttpClientModule} from '@angular/common/http';
import { RegistrierungComponent } from './components/registrierung/registrierung.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StartseiteComponent,
    DetailViewComponent,
    RecipeListComponent,
    RegistrierungComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RecipeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
