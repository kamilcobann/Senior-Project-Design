import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtrackPrimaryButtonComponent } from './protrack-primary-button.component';

describe('ProtrackPrimaryButtonComponent', () => {
  let component: ProtrackPrimaryButtonComponent;
  let fixture: ComponentFixture<ProtrackPrimaryButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtrackPrimaryButtonComponent]
    });
    fixture = TestBed.createComponent(ProtrackPrimaryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
