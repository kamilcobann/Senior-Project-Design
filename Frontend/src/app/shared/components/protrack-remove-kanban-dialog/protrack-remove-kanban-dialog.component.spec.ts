import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtrackRemoveKanbanDialogComponent } from './protrack-remove-kanban-dialog.component';

describe('ProtrackRemoveKanbanDialogComponent', () => {
  let component: ProtrackRemoveKanbanDialogComponent;
  let fixture: ComponentFixture<ProtrackRemoveKanbanDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtrackRemoveKanbanDialogComponent]
    });
    fixture = TestBed.createComponent(ProtrackRemoveKanbanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
