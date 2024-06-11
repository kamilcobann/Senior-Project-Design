import { TestBed } from '@angular/core/testing';

import { ProtrackCommentService } from './protrack-comment.service';

describe('ProtrackCommentService', () => {
  let service: ProtrackCommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProtrackCommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
