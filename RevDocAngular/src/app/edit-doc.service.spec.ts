import { TestBed } from '@angular/core/testing';

import { EditDocService } from './edit-doc.service';

describe('EditDocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditDocService = TestBed.get(EditDocService);
    expect(service).toBeTruthy();
  });
});
