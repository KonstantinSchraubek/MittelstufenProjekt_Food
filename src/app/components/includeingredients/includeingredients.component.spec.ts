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
});
