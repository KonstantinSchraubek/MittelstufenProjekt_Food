import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrierungComponent } from './registrierung.component';

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
});
