import { TestBed } from '@angular/core/testing';

import { FauxPointService } from './faux-point.service';

describe('FauxPointService', () => {
  let service: FauxPointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FauxPointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
