import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtrackTicketInfoDialogComponent } from './protrack-ticket-info-dialog.component';

describe('ProtrackTicketInfoDialogComponent', () => {
  let component: ProtrackTicketInfoDialogComponent;
  let fixture: ComponentFixture<ProtrackTicketInfoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtrackTicketInfoDialogComponent]
    });
    fixture = TestBed.createComponent(ProtrackTicketInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
