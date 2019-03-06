import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DetailViewComponent} from './detail-view.component';
import {AppModule} from '../../app.module';
import {RecipeServiceService} from '../../services/recipe-service.service';
import {Rezept} from '../../models/rezept';

describe('DetailViewComponent', () => {
  let component: DetailViewComponent;
  let fixture: ComponentFixture<DetailViewComponent>;
  let service: RecipeServiceService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailViewComponent);
    component = fixture.componentInstance;
    service = TestBed.get(RecipeServiceService);
    fixture.detectChanges();
    //spyOnProperty(service, 'selected').and.returnValue(new Rezept());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should get a selected recipe from service', () =>{
  //   spyOnProperty(service, 'selected').and.returnValue(new Rezept());
  //   let x = component.selected;
  // });
});
