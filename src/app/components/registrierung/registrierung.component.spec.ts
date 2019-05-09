import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RegistrierungComponent} from './registrierung.component';
import {AppModule} from '../../app.module';
import {DatabaseService} from '../../services/database.service';

describe('RegistrierungComponent', () => {
  let component: RegistrierungComponent;
  let fixture: ComponentFixture<RegistrierungComponent>;
  let service: DatabaseService;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrierungComponent);
    service = TestBed.get(DatabaseService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  afterEach(() => {
    spy = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change emailtaken propertie, when receiving EMAIL_TAKEN from DatabaseService', async () => {
    expect(component.emailTaken).toBe(false);
    spy = spyOn(service, 'checkEmail').and.returnValue('EMAIL_TAKEN');
    await component.checkEmail('testmail@mail.de');
    expect(spy).toHaveBeenCalled();
    expect(component.emailTaken).toBe(true);
  });

  it('should change usernametaken propertie, when receiving USERNAME_TAKEN from DatabaseService', async () => {
    expect(component.usernameTaken).toBe(false);
    spy = spyOn(service, 'checkUsername').and.returnValue('USERNAME_TAKEN');
    await component.checkUsername('Testuser');
    expect(spy).toHaveBeenCalled();
    expect(component.usernameTaken).toBe(true);
  });
});
