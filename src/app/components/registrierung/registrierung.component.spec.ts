import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrierungComponent } from './registrierung.component';
import { DatabaseService } from '../../services/database.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

describe('RegistrierungComponent', () => {
  let component: RegistrierungComponent;
  let fixture: ComponentFixture<RegistrierungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrierungComponent ]
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
