import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChangePasswordComponent} from './change-password.component';
import {AppModule} from '../../app.module';
import {DatabaseService} from '../../services/database.service';

describe('ChangePasswordComponent', () => {
  let component: ChangePasswordComponent;
  let fixture: ComponentFixture<ChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call changepassword with parameters', () => {
    const databaseservice: DatabaseService = TestBed.get(DatabaseService);
    const spy = spyOn(databaseservice, 'changePassword').and.returnValue(true);
    component.changePassword('passwort1', 'passwort1');
    expect(spy).toHaveBeenCalledWith('passwort1', 'passwort1');
  });
});
