import { ApplicationDetails } from './../../../applicationDetails';
import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-dashboard-home',
  templateUrl: './user-dashboard-home.component.html',
  styleUrls: ['./user-dashboard-home.component.css'],
})
export class UserDashboardHomeComponent implements OnInit {
  accountExists: boolean = true;
  applications: ApplicationDetails[];
  constructor(private service: UserService) {
    this.applications = new Array();
  }

  ngOnInit(): void {
    this.service.getApplicationsByCustomerId().subscribe((data) => {
      this.applications = data;
    });
  }
}
