import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UsermenueComponent} from './usermenue.component';
import {AppModule} from '../../app.module';
import {DatabaseService} from '../../services/database.service';
import {Benutzer} from '../../models/benutzer';

describe('UsermenueComponent', () => {
  let component: UsermenueComponent;
  let fixture: ComponentFixture<UsermenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getLoggedInUser', () => {
    const benutzer: Benutzer = new Benutzer('Username', 'passwort', 'oldmail@gmail.de');
    const databaseservice: DatabaseService = TestBed.get(DatabaseService);
    const spy = spyOn(databaseservice, 'getLoggedInUser').and.returnValue(benutzer);
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });
});
