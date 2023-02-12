import { TestBed } from '@angular/core/testing';

import { SrpeService } from './srpe.service';

describe('SrpeService', () => {
  let service: SrpeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrpeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
