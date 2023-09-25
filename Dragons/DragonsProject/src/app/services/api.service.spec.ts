import { TestBed } from '@angular/core/testing';

import { DragonApiService } from './dragon-api.service';

describe('ApiService', () => {
  let service: DragonApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragonApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
