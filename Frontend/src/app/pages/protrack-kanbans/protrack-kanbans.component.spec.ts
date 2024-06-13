import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtrackKanbansComponent } from './protrack-kanbans.component';

describe('ProtrackKanbansComponent', () => {
  let component: ProtrackKanbansComponent;
  let fixture: ComponentFixture<ProtrackKanbansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtrackKanbansComponent]
    });
    fixture = TestBed.createComponent(ProtrackKanbansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
