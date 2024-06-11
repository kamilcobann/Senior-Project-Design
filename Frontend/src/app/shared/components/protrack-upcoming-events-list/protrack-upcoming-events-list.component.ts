import { Component, OnInit } from '@angular/core';
import { Kanban } from 'src/app/models/Kanban';
import { ProtrackKanbanService } from 'src/app/services/protrack-kanban.service';

@Component({
  selector: 'app-protrack-upcoming-events-list',
  templateUrl: './protrack-upcoming-events-list.component.html',
  styleUrls: ['./protrack-upcoming-events-list.component.scss']
})
export class ProtrackUpcomingEventsListComponent implements OnInit{

  // events = [
  //   {
  //     day: "12",
  //     title: "Project 1",
  //     description: "Sprint Review"
  //   },
  //   {
  //     day: "15",
  //     title: "Project 2",
  //     description: "Sprint Retrospective"
  //   },
  //   {
  //     day: "17",
  //     title: "Project 3",
  //     description: "Sprint Planning"
  //   },

  // ]


  kanbans!:Kanban[]
  constructor(
    private kanbanService:ProtrackKanbanService
  ){

  }
  ngOnInit(): void {
    this.kanbanService.getAllKanbansOfUser().subscribe(res=>{
      this.kanbans = res.kanbans
    })
  }

}
