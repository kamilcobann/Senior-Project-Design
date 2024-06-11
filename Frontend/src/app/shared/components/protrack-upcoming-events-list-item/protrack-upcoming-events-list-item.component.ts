import { Component, Input, OnInit } from '@angular/core';
import { Kanban } from 'src/app/models/Kanban';

@Component({
  selector: 'app-protrack-upcoming-events-list-item',
  templateUrl: './protrack-upcoming-events-list-item.component.html',
  styleUrls: ['./protrack-upcoming-events-list-item.component.scss']
})
export class ProtrackUpcomingEventsListItemComponent implements OnInit{

  @Input()item!:Kanban
  ngOnInit(): void {
  }

}
