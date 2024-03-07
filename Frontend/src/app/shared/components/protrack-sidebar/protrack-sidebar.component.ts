import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-protrack-sidebar',
  templateUrl: './protrack-sidebar.component.html',
  styleUrls: ['./protrack-sidebar.component.scss']
})
export class ProtrackSidebarComponent implements OnInit{
  
  sidebar_items = [
    {
      icon : "heroComputerDesktop",
      label : "Dashboard",
      url : "/dashboard"
    },
    {
      icon : "heroTableCells",
      label : "Projects",
      url : "/dashboard"
    },
    {
      icon : "heroUserGroup",
      label : "Team Members",
      url : "/dashboard"
    },
    {
      icon : "heroCalendar",
      label : "Team Availability",
      url : "/dashboard"
    },
    {
      icon : "heroCog6Tooth",
      label : "Settings",
      url : "/dashboard"
    },
  ]
  
  ngOnInit(): void {

  }

}
