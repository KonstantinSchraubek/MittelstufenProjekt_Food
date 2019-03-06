import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DetailViewComponent} from './detail-view.component';
import {AppModule} from '../../app.module';
import {RecipeServiceService} from '../../services/recipe-service.service';
import {Rezept} from '../../models/rezept';
import * as data from '../../../assets/response.json';

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
    service = TestBed.get(RecipeServiceService);
    var r: Rezept = new Rezept(data.hits[0]);
    service.changeSelected(r);
    fixture = TestBed.createComponent(DetailViewComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should get a selected recipe from service', () =>{
  //   spyOnProperty(service, 'selected').and.returnValue(new Rezept());
  //   let x = component.selected;
  // });
});
