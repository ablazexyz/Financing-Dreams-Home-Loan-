import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (!sessionStorage.getItem('username')){
      this.router.navigate(['/userLogin']);
    }
  }
}
