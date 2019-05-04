import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriesFilterComponent } from './calories-filter.component';

describe('CaloriesFilterComponent', () => {
  let component: CaloriesFilterComponent;
  let fixture: ComponentFixture<CaloriesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaloriesFilterComponent ]
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
