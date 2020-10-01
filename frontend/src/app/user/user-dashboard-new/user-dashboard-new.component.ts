import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'user-dashboard-new',
  templateUrl: './user-dashboard-new.component.html',
  styleUrls: ['./user-dashboard-new.component.css'],
})
export class UserDashboardNewComponent implements OnInit {


  constructor(private router: Router, private service:UserService) {
  }

  ngOnInit(): void {

  }

  SignOut(): void{
    sessionStorage.removeItem('username');
    this.router.navigate(['/userLogin']);
  }
}
