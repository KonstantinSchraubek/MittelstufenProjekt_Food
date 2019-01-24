import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { encrypt } from './components/encrypt/encrypt.component';
import { StartseiteComponent } from './components/startseite/startseite.component';
import { RegistrierungComponent } from './components/registrierung/registrierung.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    encrypt,
    StartseiteComponent,
    RegistrierungComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
