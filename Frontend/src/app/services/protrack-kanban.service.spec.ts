import { TestBed } from '@angular/core/testing';

import { ProtrackKanbanService } from './protrack-kanban.service';

describe('ProtrackKanbanService', () => {
  let service: ProtrackKanbanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProtrackKanbanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
