import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-protrack-project-list-item',
  templateUrl: './protrack-project-list-item.component.html',
  styleUrls: ['./protrack-project-list-item.component.scss']
})
export class ProtrackProjectListItemComponent implements OnInit {


  @Input()
  project : {name?:String, event_deadline?:String, event_name?:String} = {}

  ngOnInit(): void {
  }

}
