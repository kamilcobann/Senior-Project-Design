import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtrackBoxComponent } from './protrack-box.component';

describe('ProtrackBoxComponent', () => {
  let component: ProtrackBoxComponent;
  let fixture: ComponentFixture<ProtrackBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtrackBoxComponent]
    });
    fixture = TestBed.createComponent(ProtrackBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
