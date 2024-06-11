import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtrackKanbanDetailsComponent } from './protrack-kanban-details.component';

describe('ProtrackKanbanDetailsComponent', () => {
  let component: ProtrackKanbanDetailsComponent;
  let fixture: ComponentFixture<ProtrackKanbanDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtrackKanbanDetailsComponent]
    });
    fixture = TestBed.createComponent(ProtrackKanbanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
