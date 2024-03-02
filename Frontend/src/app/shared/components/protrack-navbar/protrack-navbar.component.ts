import { Component } from '@angular/core';

@Component({
  selector: 'app-protrack-navbar',
  templateUrl: './protrack-navbar.component.html',
  styleUrls: ['./protrack-navbar.component.scss']
})
export class ProtrackNavbarComponent {
  isMobileMenuOpen: boolean = false;

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
