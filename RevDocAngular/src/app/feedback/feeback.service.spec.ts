import { TestBed } from '@angular/core/testing';

import { FeebackService } from './feeback.service';

describe('FeebackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeebackService = TestBed.get(FeebackService);
    expect(service).toBeTruthy();
  });
});
