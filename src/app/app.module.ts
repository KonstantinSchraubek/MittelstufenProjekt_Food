import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StartseiteComponent } from './components/startseite/startseite.component';

import { DetailViewComponent } from './components/detail-view/detail-view.component';

import { encrypt } from './components/encrypt/encrypt.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeServiceService} from './services/recipe-service.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    encrypt,
    DetailViewComponent,
    RecipeListComponent
    NavbarComponent,
    StartseiteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RecipeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
