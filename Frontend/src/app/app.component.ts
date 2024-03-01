import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Frontend';
  token?:String;
  ngOnInit(): void {
       this.token = (sessionStorage.getItem('access_token'))!;
      
  }

}

