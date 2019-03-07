import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeViewComponent } from './recipe-view.component';
import {AppModule} from '../../app.module';
import {RecipeServiceService} from '../../services/recipe-service.service';


describe('RecipeViewComponent', () => {
  let component: RecipeViewComponent;
  let fixture: ComponentFixture<RecipeViewComponent>;
  let service: RecipeServiceService;

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
    service = TestBed.get(RecipeServiceService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
