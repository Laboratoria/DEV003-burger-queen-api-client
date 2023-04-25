import { TestBed } from '@angular/core/testing';

import { ApiBQService } from '../services/api-bq.service';

describe('ApiBQService', () => {
  let service: ApiBQService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBQService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
