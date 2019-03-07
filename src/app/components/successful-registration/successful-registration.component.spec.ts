import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulRegistrationComponent } from './successful-registration.component';

describe('SuccessfulRegistrationComponent', () => {
  let component: SuccessfulRegistrationComponent;
  let fixture: ComponentFixture<SuccessfulRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
