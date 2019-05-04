import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsFilterComponent } from './ingredients-filter.component';

describe('IngredientsFilterComponent', () => {
  let component: IngredientsFilterComponent;
  let fixture: ComponentFixture<IngredientsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
