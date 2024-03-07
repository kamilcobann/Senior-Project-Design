import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtrackProjectListItemComponent } from './protrack-project-list-item.component';

describe('ProtrackProjectListItemComponent', () => {
  let component: ProtrackProjectListItemComponent;
  let fixture: ComponentFixture<ProtrackProjectListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtrackProjectListItemComponent]
    });
    fixture = TestBed.createComponent(ProtrackProjectListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
