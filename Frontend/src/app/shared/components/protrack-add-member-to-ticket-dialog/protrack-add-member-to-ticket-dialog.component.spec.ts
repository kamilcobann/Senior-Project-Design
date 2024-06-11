import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtrackAddMemberToTicketDialogComponent } from './protrack-add-member-to-ticket-dialog.component';

describe('ProtrackAddMemberToTicketDialogComponent', () => {
  let component: ProtrackAddMemberToTicketDialogComponent;
  let fixture: ComponentFixture<ProtrackAddMemberToTicketDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtrackAddMemberToTicketDialogComponent]
    });
    fixture = TestBed.createComponent(ProtrackAddMemberToTicketDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
