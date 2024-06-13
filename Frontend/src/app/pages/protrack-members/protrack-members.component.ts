import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/Project';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { ProtrackProjectService } from 'src/app/services/protrack-project.service';

@Component({
  selector: 'app-protrack-members',
  templateUrl: './protrack-members.component.html',
  styleUrls: ['./protrack-members.component.scss']
})
export class ProtrackMembersComponent implements OnInit{


  members?:User[]
  ownedProjects?:[Project]
  joinedProjects?:Project[]
  activeCount?:Number
  inactiveCount?:Number
  constructor(
    private router: Router,
    private projectService: ProtrackProjectService,
    private authService: AuthService
  )
  {}
  ngOnInit(): void {
      this.authService.getAllUsers().subscribe(res=>{
        this.members=res.users
      })
  }

  logout()
  {
    this.authService.logout().subscribe(res=>{
    })

    this.router.navigate(['login'])
  }

}
