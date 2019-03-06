import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeViewComponent } from './recipe-view.component';
import {RecipeListComponent} from '../../components/recipe-list/recipe-list.component';
import {AppModule} from '../../app.module';

describe('RecipeViewComponent', () => {
  let component: RecipeViewComponent;
  let fixture: ComponentFixture<RecipeViewComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        AppModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
