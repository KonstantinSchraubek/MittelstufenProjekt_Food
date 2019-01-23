import { TestBed } from '@angular/core/testing';

import { RecipeServiceService } from './recipe-service.service';

describe('RecipeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipeServiceService = TestBed.get(RecipeServiceService);
    expect(service).toBeTruthy();
  });
});
