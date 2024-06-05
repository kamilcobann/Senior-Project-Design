import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtrackAddKanbanDialogComponent } from './protrack-add-kanban-dialog.component';

describe('ProtrackAddKanbanDialogComponent', () => {
  let component: ProtrackAddKanbanDialogComponent;
  let fixture: ComponentFixture<ProtrackAddKanbanDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtrackAddKanbanDialogComponent]
    });
    fixture = TestBed.createComponent(ProtrackAddKanbanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
