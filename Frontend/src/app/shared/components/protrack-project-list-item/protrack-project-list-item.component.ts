import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';

@Component({
  selector: 'app-protrack-project-list-item',
  templateUrl: './protrack-project-list-item.component.html',
  styleUrls: ['./protrack-project-list-item.component.scss']
})
export class ProtrackProjectListItemComponent implements OnInit {


  @Input()
  project? : Project

  ngOnInit(): void {
  }

}
