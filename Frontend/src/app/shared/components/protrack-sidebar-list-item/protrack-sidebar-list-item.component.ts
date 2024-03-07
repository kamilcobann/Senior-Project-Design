import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconType } from '@ng-icons/core';

@Component({
  selector: 'app-protrack-sidebar-list-item',
  templateUrl: './protrack-sidebar-list-item.component.html',
  styleUrls: ['./protrack-sidebar-list-item.component.scss']
})
export class ProtrackSidebarListItemComponent implements OnInit {
  
  @Input()
  item : {label? :String, icon?: IconType, url?: String} = {}
  

  constructor(
    private router:Router
  ){

  }
  ngOnInit(): void {
  }

  navigateTo(url: String)
  {    
    this.router.navigate([url])
  }
}
