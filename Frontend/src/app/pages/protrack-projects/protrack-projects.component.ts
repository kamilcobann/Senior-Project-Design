import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/Project';
import { AuthService } from 'src/app/services/auth.service';
import { ProtrackProjectService } from 'src/app/services/protrack-project.service';

@Component({
  selector: 'app-protrack-projects',
  templateUrl: './protrack-projects.component.html',
  styleUrls: ['./protrack-projects.component.scss']
})
export class ProtrackProjectsComponent {

  ownedProjects?: [Project]
  joinedProjects?: Project[]
  response?: Project[]
  constructor(
    private router: Router,
    private projectService: ProtrackProjectService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.projectService.getAllProjectsOfUser().subscribe(res => {
      console.log(res);

      this.ownedProjects = res.projects
    })

    this.projectService.getAllProjects().subscribe(res => {
      this.response = res.projects
      this.joinedProjects = this.response?.filter(project => {
       return project.members?.some(member=>(member.id == sessionStorage.getItem('userId')))
      })
    })
  }

  createProject() {
    this.router.navigate(['/projects/create'])
  }

  goToProjects() {
    this.router.navigate(['/projects'])
  }
  logout() {
    this.authService.logout().subscribe(res => {
      console.log(res);
    })

    this.router.navigate(['login'])
  }

  projectDetails(project: Project) {
    this.router.navigate(['/projects/details'], {
      queryParams: {
        id: project.id
      }
    })
  }
}
