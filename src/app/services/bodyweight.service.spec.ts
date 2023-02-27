import { TestBed } from '@angular/core/testing';

import { BodyweightService } from './bodyweight.service';

describe('BodyweightService', () => {
  let service: BodyweightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BodyweightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
