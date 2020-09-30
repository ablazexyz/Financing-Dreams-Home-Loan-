import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Session } from 'protractor';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor( private router: Router) { 

    if (sessionStorage.getItem("adminEmail")==null){
      this.router.navigate(['/adminLogin'])
    }
  }

  ngOnInit(): void {
  }

  signout(){

    sessionStorage.removeItem("adminEmail");
  }
}
