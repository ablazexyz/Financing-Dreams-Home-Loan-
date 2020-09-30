import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view-customer-details',
  templateUrl: './view-customer-details.component.html',
  styleUrls: ['./view-customer-details.component.css'],
})
export class ViewCustomerDetailsComponent implements OnInit {
  constructor(private router: Router) {
    if (!sessionStorage.getItem('username')){
      this.router.navigate(['/userLogin']);
    }
  }

  ngOnInit(): void {

  }
}
