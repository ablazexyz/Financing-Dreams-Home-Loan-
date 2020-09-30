import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view-application-details',
  templateUrl: './view-application-details.component.html',
  styleUrls: ['./view-application-details.component.css'],
})
export class ViewApplicationDetailsComponent implements OnInit {
  constructor(private router: Router) {
    if (!sessionStorage.getItem('username')){
      this.router.navigate(['/userLogin']);
    }
  }

  ngOnInit(): void {
  }
}
