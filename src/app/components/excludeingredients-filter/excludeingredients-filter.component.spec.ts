import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExcludeingredientsFilterComponent} from './excludeingredients-filter.component';
import {AppModule} from '../../app.module';

describe('ExcludeingredientsFilterComponent', () => {
  let component: ExcludeingredientsFilterComponent;
  let fixture: ComponentFixture<ExcludeingredientsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
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

  it('should add item to array', () => {
    component.Add('chicken');
    expect(component._excludeIngredients.length).toBe(1);
    expect(component._excludeIngredients[0]).toBe('chicken');
  });

  it('should not add ingredients a second time', () => {
    component.Add('chicken');
    component.Add('chicken');
    expect(component._excludeIngredients.length).toBe(1);
    expect(component._excludeIngredients[0]).toBe('chicken');
    expect(component._excludeIngredients[1]).toBeUndefined();
  });

  it('should delete item from array', () => {
    component.Add('chicken');
    component.Deleted('chicken');
    expect(component._excludeIngredients.length).toBe(0);
    expect(component._excludeIngredients[0]).toBeUndefined();
  });
});
