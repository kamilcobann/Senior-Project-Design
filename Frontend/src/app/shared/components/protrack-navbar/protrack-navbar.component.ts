import { Component } from '@angular/core';

@Component({
  selector: 'app-protrack-navbar',
  templateUrl: './protrack-navbar.component.html',
  styleUrls: ['./protrack-navbar.component.scss']
})
export class ProtrackNavbarComponent {
  isMobileMenuOpen: boolean = false;

  navbar_items = [
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
      label : "Members",
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

  constructor() { }

  ngOnInit(): void {
    (<HTMLInputElement>document.getElementById("hamburger")).onclick = function toggleMenu() {
      const navToggle = document.getElementsByClassName("toggle");
      for (let i = 0; i < navToggle.length; i++) {
        (<HTMLInputElement>navToggle.item(i)).classList.toggle("hidden");
      }
    };

  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }


}
