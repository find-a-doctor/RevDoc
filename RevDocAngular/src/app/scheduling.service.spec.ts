import { TestBed } from '@angular/core/testing';

import { SchedulingService } from './scheduling.service';

describe('SchedulingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SchedulingService = TestBed.get(SchedulingService);
    expect(service).toBeTruthy();
  });
});
