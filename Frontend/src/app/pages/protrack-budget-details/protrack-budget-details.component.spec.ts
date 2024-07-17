import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtrackBudgetDetailsComponent } from './protrack-budget-details.component';

describe('ProtrackBudgetDetailsComponent', () => {
  let component: ProtrackBudgetDetailsComponent;
  let fixture: ComponentFixture<ProtrackBudgetDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtrackBudgetDetailsComponent]
    });
    fixture = TestBed.createComponent(ProtrackBudgetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
