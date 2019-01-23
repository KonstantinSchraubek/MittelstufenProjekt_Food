import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncryptComponent } from './components/encrypt/encrypt.component';
import { DetailViewComponent } from './components/detail-view/detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    EncryptComponent,
    DetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
