import { TestBed } from '@angular/core/testing';

import { DatabaseService } from './database.service';
import {AppModule} from '../app.module';

describe('DatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      AppModule
    ]
  })
    .compileComponents()
  );

  it('should be created', () => {
    const service: DatabaseService = TestBed.get(DatabaseService);
    expect(service).toBeTruthy();
  });
});
