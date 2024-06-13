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
      url : "/projects"
    },
    {
      icon : "heroUserGroup",
      label : "Members",
      url : "/members"
    },
    {
      icon : "heroCalendar",
      label : "Kanbans",
      url : "/kanbans"
    },

  ]

  ngOnInit(): void {

  }

}
