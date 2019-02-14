import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { DetailViewComponent } from './components/detail-view/detail-view.component';
import {StartseiteComponent} from './components/startseite/startseite.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import { RegistrierungComponent } from './components/registrierung/registrierung.component';
import { FormsModule } from '@angular/forms';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeServiceService} from './services/recipe-service.service';
import { RecipeViewComponent } from './views/recipe-view/recipe-view.component';
import { UsermenueComponent } from './components/usermenue/usermenue.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ChangeEmailComponent } from './components/change-email/change-email.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StartseiteComponent,
    DetailViewComponent,
    RecipeListComponent,
    RegistrierungComponent,
    RecipeListComponent,
    RecipeViewComponent,
    UsermenueComponent,
    ChangePasswordComponent,
    ChangeEmailComponent
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
