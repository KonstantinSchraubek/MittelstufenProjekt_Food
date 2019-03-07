import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrierungComponent } from './registrierung.component';
import {AppModule} from '../../app.module';

describe('RegistrierungComponent', () => {
  let component: RegistrierungComponent;
  let fixture: ComponentFixture<RegistrierungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        AppModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrierungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should add an user if the user is not already in the database', () => {
  //  let a = component.addUser("flex@mail.com","test", "test", "flexi");
  //  expect(a).toBe(true);
  // });
});
