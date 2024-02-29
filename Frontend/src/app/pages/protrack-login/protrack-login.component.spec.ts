import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtrackLoginComponent } from './protrack-login.component';

describe('ProtrackLoginComponent', () => {
  let component: ProtrackLoginComponent;
  let fixture: ComponentFixture<ProtrackLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtrackLoginComponent]
    });
    fixture = TestBed.createComponent(ProtrackLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
