import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtrackCreateProjectComponent } from './protrack-create-project.component';

describe('ProtrackCreateProjectComponent', () => {
  let component: ProtrackCreateProjectComponent;
  let fixture: ComponentFixture<ProtrackCreateProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtrackCreateProjectComponent]
    });
    fixture = TestBed.createComponent(ProtrackCreateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
