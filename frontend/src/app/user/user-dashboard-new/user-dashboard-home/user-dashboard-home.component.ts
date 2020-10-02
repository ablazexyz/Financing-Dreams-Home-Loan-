import { Account } from './../../Account';

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
  
  accountExists: boolean = false;

  applications: Application[] = [];

  account: Account;

  isFirstTimeUser: boolean;

  isLoaded: boolean = false;

  registrationDetails: Register;

  name: string;

  constructor(private service: UserService, private router: Router,private route: ActivatedRoute) {
    if (!sessionStorage.getItem('username')) {
      this.router.navigate(['/userLogin']);
    }


  }

  ngOnInit(): void {

    this.service.getUserDetails(sessionStorage.getItem('username')).subscribe(data=>{
  
      if (data == null){
        this.isFirstTimeUser = true;
      }
      else{
        this.isFirstTimeUser = false;

      this.service.getRegDetails(sessionStorage.getItem('username')).subscribe(data => {

        this.registrationDetails = data;
        console.log(this.registrationDetails);
        
        this.name = (data.firstName + ' ' + data.lastName);

        console.log("Registration Details :",data)
      });

     

     
    
          this.service.getAccountbyEmail(sessionStorage.getItem('username')).subscribe((data) => {
            
            this.account = data;
            console.log("Account Details",this.account);

            if (data==null){
              this.accountExists = false;
            }
            else{
              this.accountExists = true;
            }
            

            
           

            console.log("First Time User Value:",this.isFirstTimeUser);
            console.log("Account Exists Boolean:",this.accountExists);
            console.log("IsLoaded Boolean Value: ",this.isLoaded);

            this.service.getApplicationsbyEmail(sessionStorage.getItem('username')).subscribe((data) => {
              this.applications = data;
              console.log("Applications",this.applications);
            });

            this.isLoaded = true;
            
          })

      }


    });


    /*
    this.service.isFirstTimeUser(sessionStorage.getItem('username')).subscribe(
      (data) => {
        this.isFirstTimeUser = data;
      },
      (error) => console.log(error),
      () => (this.isLoaded = true)
    );
      */
    
  }

  viewApplicationDetailsOf(application_id: number) {
    console.log(application_id);
    console.log(this.route.parent);
    this.router.navigate(['../viewApplicationDetails'], {
      relativeTo: this.route,
    });
  }
}
