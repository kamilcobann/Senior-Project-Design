import { TestBed } from '@angular/core/testing';

import { ProtrackBudgetService } from './protrack-budget.service';

describe('ProtrackBudgetService', () => {
  let service: ProtrackBudgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProtrackBudgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
