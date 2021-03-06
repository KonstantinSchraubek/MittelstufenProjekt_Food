import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DetailViewComponent} from './components/detail-view/detail-view.component';
import {StartseiteComponent} from './components/startseite/startseite.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {RegistrierungComponent} from './components/registrierung/registrierung.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RecipeListComponent} from './components/recipe-list/recipe-list.component';
import {RecipeServiceService} from './services/recipe-service.service';
import {RecipeViewComponent} from './views/recipe-view/recipe-view.component';
import {UsermenueComponent} from './components/usermenue/usermenue.component';
import {ChangePasswordComponent} from './components/change-password/change-password.component';
import {ChangeEmailComponent} from './components/change-email/change-email.component';
import {APP_BASE_HREF} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {CookieService} from 'ngx-cookie-service';
import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io';
import {ContactComponent} from './components/contact/contact.component';
import {ShowHidePasswordModule} from 'ngx-show-hide-password';
import {FavoritesComponent} from './components/favorites/favorites.component';
import {HistoryComponent} from './components/history/history.component';
import {DietFilterComponent} from './components/diet-filter/diet-filter.component';
import {CaloriesFilterComponent} from './components/calories-filter/calories-filter.component';
import {FilterComponent} from './components/filter/filter.component';
import {TimeFilterComponent} from './components/time-filter/time-filter.component';
import {ExcludeingredientsFilterComponent} from './components/excludeingredients-filter/excludeingredients-filter.component';
import {IncludeingredientsComponent} from './components/includeingredients/includeingredients.component';
import {Ng5SliderModule} from 'ng5-slider';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';

const config: SocketIoConfig = {url: 'http://localhost:3000', options: {}};

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
    ChangeEmailComponent,
    LoginComponent,
    ContactComponent,
    DietFilterComponent,
    CaloriesFilterComponent,
    FilterComponent,
    TimeFilterComponent,
    ExcludeingredientsFilterComponent,
    IncludeingredientsComponent,
    FavoritesComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng5SliderModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    ShowHidePasswordModule,
    AngularMultiSelectModule
  ],
  providers: [RecipeServiceService, CookieService, {provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
