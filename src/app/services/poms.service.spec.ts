import { TestBed } from '@angular/core/testing';

import { PomsService } from './poms.service';

describe('PomsService', () => {
  let service: PomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
