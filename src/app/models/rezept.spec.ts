import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rezept } from './Rezept';

describe('RecipeViewComponent', () => {
  let component: Rezept;
  let fixture: ComponentFixture<Rezept>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rezept ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rezept);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
