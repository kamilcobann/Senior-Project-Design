import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtrackAddTicketDialogComponent } from './protrack-add-ticket-dialog.component';

describe('ProtrackAddTicketDialogComponent', () => {
  let component: ProtrackAddTicketDialogComponent;
  let fixture: ComponentFixture<ProtrackAddTicketDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtrackAddTicketDialogComponent]
    });
    fixture = TestBed.createComponent(ProtrackAddTicketDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
