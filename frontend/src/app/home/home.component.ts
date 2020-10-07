import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  islogged = false;
  constructor() {
    if (sessionStorage.getItem('username') != null){
      this.islogged = true;
    }
   }

  ngOnInit(): void {
  }
  logout(): void {
    sessionStorage.removeItem('username');
    this.islogged = false;
  }

}
