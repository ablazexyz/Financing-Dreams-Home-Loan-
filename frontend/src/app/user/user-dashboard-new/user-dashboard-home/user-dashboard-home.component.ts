import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(
    private service: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.applications = new Array();
  }

  ngOnInit(): void {
    this.service.getApplicationsByCustomerId().subscribe((data) => {
      this.applications = data;
    });
  }

  viewApplicationDetailsOf(application_id: number) {
    console.log(application_id);
    console.log(this.route.parent);
    this.router.navigate(['../viewApplicationDetails'], {
      relativeTo: this.route,
    });
  }
}
