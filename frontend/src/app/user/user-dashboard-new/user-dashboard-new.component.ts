import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'user-dashboard-new',
  templateUrl: './user-dashboard-new.component.html',
  styleUrls: ['./user-dashboard-new.component.css'],
})
export class UserDashboardNewComponent implements OnInit {
  name: string;

  constructor(private router: Router, private service:UserService) {

    this.service.getUserDetails(sessionStorage.getItem('username')).subscribe(data=>{

      sessionStorage.setItem('Name',(data.firstName+' '+data.lastName));

    });
  }

  ngOnInit(): void {
    // console.log('user dashboard init called');
    this.name = sessionStorage.getItem('Name');
  }

  SignOut(): void{
    sessionStorage.removeItem('username');
    this.router.navigate(['/userLogin']);
  }
}
