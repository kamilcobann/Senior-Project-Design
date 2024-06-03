import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProtrackProjectService } from 'src/app/services/protrack-project.service';
import { Project } from 'src/app/models/Project';
import { ProtrackKanbanService } from 'src/app/services/protrack-kanban.service';
import { Kanban } from 'src/app/models/Kanban';

@Component({
  selector: 'app-protrack-project-details',
  templateUrl: './protrack-project-details.component.html',
  styleUrls: ['./protrack-project-details.component.scss']
})
export class ProtrackProjectDetailsComponent implements OnInit{


  projectId!: String;
  project!:Project;
  kanbans?:[Kanban];
  start_date!:String;
  isToggled!:Boolean;


  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private location: Location,
    private projectSercvice: ProtrackProjectService,
    private kanbanService: ProtrackKanbanService
  )
  {}

  ngOnInit(): void {


    this.route.queryParamMap.subscribe((params) => {
      this.projectId = params.get('id')!;
    })

    this.projectSercvice.getProjectById(this.projectId).subscribe( res => {
      this.project = res.project
      this.start_date = new Date(this.project.start_date!.toString()).toDateString()
      console.log(this.project);
      this.isToggled = this.project.is_active ? this.project.is_active : false
    })

    this.kanbanService.getAllKanbansOfProject(this.projectId).subscribe( res => {
      this.kanbans = res.kanbans;
      console.log(this.kanbans);

    })
  }


  deleteKanban(id:String) {
    this.kanbanService.deleteKanbanById(id).subscribe( res =>{
      console.log(res);
    })

    this.kanbanService.getAllKanbansOfProject(this.projectId).subscribe( res => {
      this.kanbans = res.kanbans;
    })
  }

  removeMemberFromProject(id:String){

    this.projectSercvice.removeMemberFromProject(this.projectId,id).subscribe(res => {
      console.log(res);
    })
    this.projectSercvice.getProjectById(this.projectId).subscribe( res => {
      this.project.members = res.project.members

    })
  }

toggleSwitch(isChecked:boolean){
  this.project.is_active
}


}
