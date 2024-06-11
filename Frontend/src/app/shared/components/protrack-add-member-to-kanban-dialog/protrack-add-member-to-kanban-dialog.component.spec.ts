import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtrackAddMemberToKanbanDialogComponent } from './protrack-add-member-to-kanban-dialog.component';

describe('ProtrackAddMemberToKanbanDialogComponent', () => {
  let component: ProtrackAddMemberToKanbanDialogComponent;
  let fixture: ComponentFixture<ProtrackAddMemberToKanbanDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtrackAddMemberToKanbanDialogComponent]
    });
    fixture = TestBed.createComponent(ProtrackAddMemberToKanbanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
