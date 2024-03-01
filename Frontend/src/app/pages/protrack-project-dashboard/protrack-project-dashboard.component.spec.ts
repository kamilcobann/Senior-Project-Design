import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtrackProjectDashboardComponent } from './protrack-project-dashboard.component';

describe('ProtrackProjectDashboardComponent', () => {
  let component: ProtrackProjectDashboardComponent;
  let fixture: ComponentFixture<ProtrackProjectDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtrackProjectDashboardComponent]
    });
    fixture = TestBed.createComponent(ProtrackProjectDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
