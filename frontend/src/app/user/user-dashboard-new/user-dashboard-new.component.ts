import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-dashboard-new',
  templateUrl: './user-dashboard-new.component.html',
  styleUrls: ['./user-dashboard-new.component.css'],
})
export class UserDashboardNewComponent implements OnInit {
  name: string;
  constructor() {
  }

  ngOnInit(): void {
    this.name = sessionStorage.getItem('name');
  }
}
