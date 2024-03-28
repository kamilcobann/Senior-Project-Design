import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/Project';
import { ProtrackProjectService } from 'src/app/services/protrack-project.service';

@Component({
  selector: 'app-protrack-project-dashboard',
  templateUrl: './protrack-project-dashboard.component.html',
  styleUrls: ['./protrack-project-dashboard.component.scss']
})
export class ProtrackProjectDashboardComponent implements OnInit {

  response?:[Project]

  constructor(
    private router: Router,
    private projectService: ProtrackProjectService
  )
  {}
  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe( res => {
      console.log(res);
      this.response = res.projects
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

  projectDetails(project:Project){
    this.router.navigate(['/projects/details'],{queryParams:{
      id:project.id
    }})
  }
}
