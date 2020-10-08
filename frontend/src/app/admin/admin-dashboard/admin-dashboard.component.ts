import { AdminService } from './../admin.service';
import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Session } from 'protractor';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  highlightDash = true;
  highlightProfile = false;
  highlightApp = false;
  navTitle = 'dashboard';
  username: string;

  constructor( private router: Router) {


    if (sessionStorage.getItem('adminEmail') == null){
      this.router.navigate(['/adminLogin']);
    }
  }

  ngOnInit(): void {
    // this.navTitle = this.service.getNavTitle();
    // console.log(this.navTitle);
    this.username = sessionStorage.getItem('adminEmail');
  }

  signout(): void{

    sessionStorage.removeItem('adminEmail');
  }
}
