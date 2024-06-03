import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/Project';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
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
    private projectService: ProtrackProjectService,
    private authService: AuthService
  )
  {}
  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe( res => {
      this.response = res.projects

    })
  }

  logout()
  {
    this.authService.logout().subscribe(res=>{
      console.log(res);
    })

    this.router.navigate(['login'])
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
