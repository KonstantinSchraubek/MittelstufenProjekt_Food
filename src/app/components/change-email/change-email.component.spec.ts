import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChangeEmailComponent} from './change-email.component';
import {AppModule} from '../../app.module';
import {DatabaseService} from '../../services/database.service';
import {Benutzer} from '../../models/benutzer';

describe('ChangeEmailComponent', () => {
  let component: ChangeEmailComponent;
  let fixture: ComponentFixture<ChangeEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call changeEmail when emails are different', async () => {
    const databaseservice: DatabaseService = TestBed.get(DatabaseService);
    const benutzer: Benutzer = new Benutzer('Username', 'passwort', 'oldmail@gmail.de');
    const spy = spyOn(databaseservice, 'getLoggedInUser').and.returnValue(benutzer);
    const spy1 = spyOn(databaseservice, 'changeEmail');
    await component.changeEmail('newMail@mail.de', 'newMail@mail.de', 'passwort');
    expect(spy).toHaveBeenCalled();
    expect(spy1).toHaveBeenCalled();
  });

  it('should not call change email when newmail and newconfirmmail are different', async () => {
    const databaseservice: DatabaseService = TestBed.get(DatabaseService);
    const benutzer: Benutzer = new Benutzer('Username', 'passwort', 'oldmail@gmail.de');
    const spy = spyOn(databaseservice, 'getLoggedInUser').and.returnValue(benutzer);
    const spy1 = spyOn(databaseservice, 'changeEmail');
    await component.changeEmail('newMail@mail.de', 'newMai@mail.de', 'passwort');
    expect(spy).toHaveBeenCalled();
    expect(spy1).toHaveBeenCalledTimes(0);
  });
});
