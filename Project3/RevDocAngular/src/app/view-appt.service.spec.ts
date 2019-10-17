import { TestBed } from '@angular/core/testing';

import { ViewApptService } from './view-appt.service';

describe('ViewApptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewApptService = TestBed.get(ViewApptService);
    expect(service).toBeTruthy();
  });
});
