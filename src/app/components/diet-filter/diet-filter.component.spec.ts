import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DietFilterComponent} from './diet-filter.component';
import {AppModule} from '../../app.module';

describe('DietFilterComponent', () => {
  let component: DietFilterComponent;
  let fixture: ComponentFixture<DietFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
