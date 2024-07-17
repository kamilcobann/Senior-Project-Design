import { TestBed } from '@angular/core/testing';

import { ProtrackExpenseService } from './protrack-expense.service';

describe('ProtrackExpenseService', () => {
  let service: ProtrackExpenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProtrackExpenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
