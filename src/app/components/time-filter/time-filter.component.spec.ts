import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TimeFilterComponent} from './time-filter.component';
import {AppModule} from '../../app.module';

describe('TimeFilterComponent', () => {
  let component: TimeFilterComponent;
  let fixture: ComponentFixture<TimeFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
