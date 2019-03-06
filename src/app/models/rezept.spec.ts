import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Rezept} from './Rezept';
import {AppModule} from '../app.module';
import * as data from '../../assets/response.json';

describe('Rezept', () => {
  let component: Rezept;

  beforeEach(()=>{
    component = new Rezept(data.hits[0]);
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should work with responeObject contructor', () => {
    expect(component).toBeDefined();

    expect(component.calories).toBe(4230.305691201081);
    expect(component.yield).toBe(4.0);
  });
});
