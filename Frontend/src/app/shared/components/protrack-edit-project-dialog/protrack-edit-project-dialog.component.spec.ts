import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtrackEditProjectDialogComponent } from './protrack-edit-project-dialog.component';

describe('ProtrackEditProjectDialogComponent', () => {
  let component: ProtrackEditProjectDialogComponent;
  let fixture: ComponentFixture<ProtrackEditProjectDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtrackEditProjectDialogComponent]
    });
    fixture = TestBed.createComponent(ProtrackEditProjectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
