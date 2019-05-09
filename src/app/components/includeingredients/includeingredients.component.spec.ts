import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IncludeingredientsComponent} from './includeingredients.component';
import {AppModule} from '../../app.module';

describe('IncludeingredientsComponent', () => {
  let component: IncludeingredientsComponent;
  let fixture: ComponentFixture<IncludeingredientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncludeingredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add item to array', () => {
    component.Add({id: 'chicken', itemName: 'Chicken'});
    expect(component._includeIngredients.length).toBe(1);
    expect(component._includeIngredients[0]).toBe('chicken');
  });

  it('should not add ingriends a secound time', () => {
    component.Add({id: 'chicken', itemName: 'Chicken'});
    component.Add({id: 'chicken', itemName: 'Chicken'});
    expect(component._includeIngredients.length).toBe(1);
    expect(component._includeIngredients[0]).toBe('chicken');
    expect(component._includeIngredients[1]).toBeUndefined();
  });

  it('should delete item from array', () => {
    component.Add({id: 'chicken', itemName: 'Chicken'});
    component.Deleted({id: 'chicken', itemName: 'Chicken'});
    expect(component._includeIngredients.length).toBe(0);
    expect(component._includeIngredients[0]).toBeUndefined();
  });
});
