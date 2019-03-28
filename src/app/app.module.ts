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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeServiceService} from './services/recipe-service.service';
import { RecipeViewComponent } from './views/recipe-view/recipe-view.component';
import { UsermenueComponent } from './components/usermenue/usermenue.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ChangeEmailComponent } from './components/change-email/change-email.component';
import {APP_BASE_HREF} from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { SuccessfulRegistrationComponent } from './components/successful-registration/successful-registration.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ContactComponent } from './components/contact/contact.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

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
    ChangeEmailComponent,
    SuccessfulRegistrationComponent,
    ChangeEmailComponent,
    LoginComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [RecipeServiceService, CookieService, {provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
