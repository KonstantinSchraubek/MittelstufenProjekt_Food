import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermenueComponent } from './usermenue.component';

describe('UsermenueComponent', () => {
  let component: UsermenueComponent;
  let fixture: ComponentFixture<UsermenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermenueComponent ]
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
});
