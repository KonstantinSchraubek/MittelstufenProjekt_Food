import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietFilterComponent } from './diet-filter.component';

describe('DietFilterComponent', () => {
  let component: DietFilterComponent;
  let fixture: ComponentFixture<DietFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
