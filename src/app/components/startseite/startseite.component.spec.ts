import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartseiteComponent } from './startseite.component';
import {AppModule} from '../../app.module';

describe('StartseiteComponent', () => {
  let component: StartseiteComponent;
  let fixture: ComponentFixture<StartseiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        AppModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartseiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
