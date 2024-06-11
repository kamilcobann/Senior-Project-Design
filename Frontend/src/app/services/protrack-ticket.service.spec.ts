import { TestBed } from '@angular/core/testing';

import { ProtrackTicketService } from './protrack-ticket.service';

describe('ProtrackTicketService', () => {
  let service: ProtrackTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProtrackTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
