import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { encrypt } from './components/encrypt/encrypt.component';
import {StartseiteComponent} from './components/startseite/startseite.component';
import {NavbarComponent} from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    encrypt,
    NavbarComponent,
    StartseiteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
