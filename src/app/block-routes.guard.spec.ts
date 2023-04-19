import { TestBed } from '@angular/core/testing';

import { BlockRoutesGuard } from './block-routes.guard';

describe('BlockRoutesGuard', () => {
  let guard: BlockRoutesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BlockRoutesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
