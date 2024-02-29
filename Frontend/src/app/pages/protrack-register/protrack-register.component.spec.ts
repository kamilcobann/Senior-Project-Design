import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtrackRegisterComponent } from './protrack-register.component';

describe('ProtrackRegisterComponent', () => {
  let component: ProtrackRegisterComponent;
  let fixture: ComponentFixture<ProtrackRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtrackRegisterComponent]
    });
    fixture = TestBed.createComponent(ProtrackRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
