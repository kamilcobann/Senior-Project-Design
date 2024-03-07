import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protrack-project-dashboard',
  templateUrl: './protrack-project-dashboard.component.html',
  styleUrls: ['./protrack-project-dashboard.component.scss']
})
export class ProtrackProjectDashboardComponent implements OnInit {
  
  response = [
    {
      name: "Project 1",
      event_name: "Brainstorming",
      event_deadline: "in 3 Days"
    },
    {
      name: "Project 2",
      event_name: "Sprint Planning",
      event_deadline: "in 2 Days"
    },
    {
      name: "Project 3",
      event_name: "Sprint Retrospective",
      event_deadline: "in 3 Days"
    },
  ]
  
  constructor() {

  }
ngOnInit(): void {
    
}

}
