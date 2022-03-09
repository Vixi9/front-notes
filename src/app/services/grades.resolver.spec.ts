import { TestBed } from '@angular/core/testing';

import { GradesResolver } from './grades.resolver';

describe('GradesResolver', () => {
  let resolver: GradesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GradesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
