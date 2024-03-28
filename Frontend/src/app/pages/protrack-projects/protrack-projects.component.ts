import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/Project';
import { ProtrackProjectService } from 'src/app/services/protrack-project.service';

@Component({
  selector: 'app-protrack-projects',
  templateUrl: './protrack-projects.component.html',
  styleUrls: ['./protrack-projects.component.scss']
})
export class ProtrackProjectsComponent {

  ownedProjects?:[Project]
  joinedProjects?:[Project]

  constructor(
    private router: Router,
    private projectService: ProtrackProjectService
  )
  {}

  ngOnInit(): void {
    this.projectService.getAllProjectsOfUser().subscribe( res => {
      console.log(res);
      this.ownedProjects = res.projects
    })

    this.projectService.getAllProjectsOfUser().subscribe( res => {
      console.log(res);
      this.joinedProjects = res.projects
    })
  }

  createProject()
  {
    this.router.navigate(['/projects/create'])
  }

  goToProjects()
  {
    this.router.navigate(['/projects'])
  }

}
