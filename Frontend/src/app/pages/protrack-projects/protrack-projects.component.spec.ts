import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtrackProjectsComponent } from './protrack-projects.component';

describe('ProtrackProjectsComponent', () => {
  let component: ProtrackProjectsComponent;
  let fixture: ComponentFixture<ProtrackProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtrackProjectsComponent]
    });
    fixture = TestBed.createComponent(ProtrackProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
