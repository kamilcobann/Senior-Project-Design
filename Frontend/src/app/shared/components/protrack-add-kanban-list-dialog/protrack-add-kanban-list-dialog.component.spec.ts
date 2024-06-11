import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtrackAddKanbanListDialogComponent } from './protrack-add-kanban-list-dialog.component';

describe('ProtrackAddKanbanListDialogComponent', () => {
  let component: ProtrackAddKanbanListDialogComponent;
  let fixture: ComponentFixture<ProtrackAddKanbanListDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtrackAddKanbanListDialogComponent]
    });
    fixture = TestBed.createComponent(ProtrackAddKanbanListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
