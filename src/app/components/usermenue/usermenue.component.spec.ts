import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermenueComponent } from './usermenue.component';
import {AppModule} from '../../app.module';

describe('UsermenueComponent', () => {
  let component: UsermenueComponent;
  let fixture: ComponentFixture<UsermenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
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
});
