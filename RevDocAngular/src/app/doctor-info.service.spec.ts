import { TestBed } from '@angular/core/testing';

import { DoctorInfoService } from './doctor-info.service';

describe('DoctorInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoctorInfoService = TestBed.get(DoctorInfoService);
    expect(service).toBeTruthy();
  });
});
