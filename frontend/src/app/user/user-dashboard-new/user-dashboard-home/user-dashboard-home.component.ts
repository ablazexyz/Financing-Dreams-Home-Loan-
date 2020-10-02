import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';
import { Register } from '../../register';
import { Application } from '../../application';

@Component({
  selector: 'user-dashboard-home',
  templateUrl: './user-dashboard-home.component.html',
  styleUrls: ['./user-dashboard-home.component.css'],
})
export class UserDashboardHomeComponent implements OnInit {
  accountExists: boolean = true;
  applications: Application[];
  isFirstTimeUser: boolean;
  isLoaded: boolean = false;

  registrationDetails: Register;

  name: string;

  constructor(private service: UserService, private router: Router,private route: ActivatedRoute) {
    if (!sessionStorage.getItem('username')) {
      this.router.navigate(['/userLogin']);
    }

    this.applications = new Array();


    this.service.getRegDetails(sessionStorage.getItem('username')).subscribe(data => {

      this.registrationDetails = data;
      console.log(this.registrationDetails);
      
      this.name = (data.firstName + ' ' + data.lastName);
    });


    this.service.getUserDetails(sessionStorage.getItem('username')).subscribe(data=>{

      console.log(data)
      if (data == null){
        this.isFirstTimeUser = true;
      }
      else{
        this.isFirstTimeUser = false;
      }
      console.log("Boolean Value:",this.isFirstTimeUser)
    })


  }

  ngOnInit(): void {
  
    this.service.getApplicationsbyEmail(sessionStorage.getItem('username')).subscribe((data) => {
      this.applications = data;
      console.log("Applications",this.applications);
    });
    this.service.isFirstTimeUser(sessionStorage.getItem('username')).subscribe(
      (data) => {
        this.isFirstTimeUser = data;
      },
      (error) => console.log(error),
      () => (this.isLoaded = true)
    );

    
  }

  viewApplicationDetailsOf(application_id: number) {
    console.log(application_id);
    console.log(this.route.parent);
    this.router.navigate(['../viewApplicationDetails'], {
      relativeTo: this.route,
    });
  }
}
