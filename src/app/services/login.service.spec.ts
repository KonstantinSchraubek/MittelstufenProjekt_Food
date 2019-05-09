import {async, TestBed} from '@angular/core/testing';

import { LoginService } from './login.service';
import {AppModule} from '../app.module';

describe('LoginService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    })
      .compileComponents();
  }));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });
});
