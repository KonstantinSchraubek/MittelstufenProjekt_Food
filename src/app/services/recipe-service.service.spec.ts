import { TestBed } from '@angular/core/testing';

import { RecipeServiceService } from './recipe-service.service';
import { HttpClientModule} from '@angular/common/http';

describe('RecipeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: RecipeServiceService = TestBed.get(RecipeServiceService);
    expect(service).toBeTruthy();
  });
});
