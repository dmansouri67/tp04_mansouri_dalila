import { TestBed } from '@angular/core/testing';

import { HasContactGuard } from './has-contact.guard';

describe('HasContactGuard', () => {
  let guard: HasContactGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HasContactGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
