import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-dashboard-new',
  templateUrl: './user-dashboard-new.component.html',
  styleUrls: ['./user-dashboard-new.component.css'],
})
export class UserDashboardNewComponent implements OnInit {
  name: string;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // console.log('user dashboard init called');
    this.name = sessionStorage.getItem('username');
  }

  SignOut(): void{
    sessionStorage.removeItem('username');
    this.router.navigate(['/userLogin']);
  }
}
