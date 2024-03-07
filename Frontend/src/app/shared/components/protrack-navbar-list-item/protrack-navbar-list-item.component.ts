import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconType } from '@ng-icons/core';
@Component({
  selector: 'app-protrack-navbar-list-item',
  templateUrl: './protrack-navbar-list-item.component.html',
  styleUrls: ['./protrack-navbar-list-item.component.scss']
})
export class ProtrackNavbarListItemComponent implements OnInit{

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
