import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtrackDeleteBudgetDialogComponent } from './protrack-delete-budget-dialog.component';

describe('ProtrackDeleteBudgetDialogComponent', () => {
  let component: ProtrackDeleteBudgetDialogComponent;
  let fixture: ComponentFixture<ProtrackDeleteBudgetDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtrackDeleteBudgetDialogComponent]
    });
    fixture = TestBed.createComponent(ProtrackDeleteBudgetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
