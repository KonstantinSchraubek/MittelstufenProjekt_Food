import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcludeingredientsFilterComponent } from './excludeingredients-filter.component';

describe('ExcludeingredientsFilterComponent', () => {
  let component: ExcludeingredientsFilterComponent;
  let fixture: ComponentFixture<ExcludeingredientsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcludeingredientsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcludeingredientsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
