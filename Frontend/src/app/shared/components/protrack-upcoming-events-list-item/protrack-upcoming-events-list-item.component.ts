import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-protrack-upcoming-events-list-item',
  templateUrl: './protrack-upcoming-events-list-item.component.html',
  styleUrls: ['./protrack-upcoming-events-list-item.component.scss']
})
export class ProtrackUpcomingEventsListItemComponent implements OnInit{
  
  @Input()
  item : {day?: String, title?: String, description?: String} = {}
  ngOnInit(): void {
  }

}
