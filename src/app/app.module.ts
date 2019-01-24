import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { encrypt } from './components/encrypt/encrypt.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeServiceService} from './services/recipe-service.service';
import {HttpClientModule} from '@angular/common/http';
import { RecipeViewComponent } from './views/recipe-view/recipe-view.component';
/////
@NgModule({
  declarations: [
    AppComponent,
    encrypt,
    RecipeListComponent,
    RecipeViewComponent
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
