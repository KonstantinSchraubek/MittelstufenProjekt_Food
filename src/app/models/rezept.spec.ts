import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rezept } from './Rezept';
import {AppModule} from '../app.module';
import * as data from '../../assets/response.json';

describe('RecipeViewComponent', () => {
  let component: Rezept;
  let fixture: ComponentFixture<Rezept>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports :[
        AppModule
      ],
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

  it('should work with responeObject contructor', () =>{
    var r: Rezept = new Rezept(data.hits[0]);
    expect(r).toBeDefined();



  });
});
