import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CaloriesFilterComponent} from './calories-filter.component';
import {AppModule} from '../../app.module';

describe('CaloriesFilterComponent', () => {
  let component: CaloriesFilterComponent;
  let fixture: ComponentFixture<CaloriesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaloriesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
