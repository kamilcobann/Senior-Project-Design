import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { Kanban } from 'src/app/models/Kanban';
import { Project } from 'src/app/models/Project';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { ProtrackKanbanService } from 'src/app/services/protrack-kanban.service';
import { ProtrackProjectService } from 'src/app/services/protrack-project.service';

@Component({
  selector: 'app-protrack-project-dashboard',
  templateUrl: './protrack-project-dashboard.component.html',
  styleUrls: ['./protrack-project-dashboard.component.scss']
})
export class ProtrackProjectDashboardComponent implements OnInit {

  response?:[Project]
  ownedKanbans?:Kanban[]
  ownedProjects?:[Project]
  joinedProjects?:Project[]
  activeCount?:Number
  inactiveCount?:Number
  constructor(
    private router: Router,
    private projectService: ProtrackProjectService,
    private kanbanService: ProtrackKanbanService,
    private authService: AuthService
  )
  {}
  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe( res => {
      this.response = res.projects
      this.activeCount = this.response?.filter(project => {
        return project.is_active == true
      }).length

      this.inactiveCount = this.response?.filter(project => {
        return project.is_active == false
      }).length

      this.joinedProjects = this.response?.filter( project => {
        return project.members?.some(member => member.id == (sessionStorage.getItem('userId')))
      })
    })
    this.kanbanService.getAllKanbansOfUser().subscribe(res=>{
      this.ownedKanbans=res.kanbans
    })
    this.projectService.getAllProjectsOfUser().subscribe(res=>{
      this.ownedProjects = res.projects
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
