import { TestBed } from '@angular/core/testing';

import { ProtrackKanbanListService } from './protrack-kanban-list.service';

describe('ProtrackKanbanListService', () => {
  let service: ProtrackKanbanListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProtrackKanbanListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
