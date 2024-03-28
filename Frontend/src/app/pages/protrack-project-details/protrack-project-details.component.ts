import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProtrackProjectService } from 'src/app/services/protrack-project.service';
import { Project } from 'src/app/models/Project';

@Component({
  selector: 'app-protrack-project-details',
  templateUrl: './protrack-project-details.component.html',
  styleUrls: ['./protrack-project-details.component.scss']
})
export class ProtrackProjectDetailsComponent implements OnInit{


  projectId!: String;
  project!:Project;



  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private location: Location,
    private projectSercvice: ProtrackProjectService
  )
  {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.projectId = params.get('id')!;
    })

    this.projectSercvice.getProjectById(this.projectId).subscribe( res => {
      this.project = res.project
      console.log(this.project);

    })
  }


}
