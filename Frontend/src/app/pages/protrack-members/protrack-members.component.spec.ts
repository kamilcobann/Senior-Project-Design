import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtrackMembersComponent } from './protrack-members.component';

describe('ProtrackMembersComponent', () => {
  let component: ProtrackMembersComponent;
  let fixture: ComponentFixture<ProtrackMembersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtrackMembersComponent]
    });
    fixture = TestBed.createComponent(ProtrackMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
