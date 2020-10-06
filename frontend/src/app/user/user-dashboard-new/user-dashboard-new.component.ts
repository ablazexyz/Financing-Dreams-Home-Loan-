import { Register } from './../register';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'user-dashboard-new',
  templateUrl: './user-dashboard-new.component.html',
  styleUrls: ['./user-dashboard-new.component.css'],
})
export class UserDashboardNewComponent implements OnInit {

  user: string;
  registrationDetails: Register;

  constructor(private router: Router, private service: UserService) {
    console.log('constructor');
    this.service.getRegDetails(sessionStorage.getItem('username')).subscribe(data => {

      this.registrationDetails = data;
      console.log(this.registrationDetails);
      // console.log('Registration Details :', data);
    });
  }

  ngOnInit(): void {
    this.user = sessionStorage.getItem('username');
  }

  SignOut(): void{
    sessionStorage.removeItem('username');
    this.router.navigate(['/userLogin']);
  }
}
