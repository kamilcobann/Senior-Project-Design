import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtrackAddUserToProjectDialogComponent } from './protrack-add-user-to-project-dialog.component';

describe('ProtrackAddUserToProjectDialogComponent', () => {
  let component: ProtrackAddUserToProjectDialogComponent;
  let fixture: ComponentFixture<ProtrackAddUserToProjectDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtrackAddUserToProjectDialogComponent]
    });
    fixture = TestBed.createComponent(ProtrackAddUserToProjectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
