import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/Project';

@Component({
  selector: 'app-protrack-project-list-item',
  templateUrl: './protrack-project-list-item.component.html',
  styleUrls: ['./protrack-project-list-item.component.scss']
})
export class ProtrackProjectListItemComponent implements OnInit {


  @Input()
  project?: Project


  constructor(
    private router: Router
  ) {

  }
  ngOnInit(): void {
  }

  projectDetails(project: Project): void {
    this.router.navigate(['/project/details'], {
      queryParams: {
        id: project.id
      }
    })
  }
}
