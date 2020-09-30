import { CustomerDetails } from './../../customerDetails';
import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view-customer-details',
  templateUrl: './view-customer-details.component.html',
  styleUrls: ['./view-customer-details.component.css'],
})
export class ViewCustomerDetailsComponent implements OnInit {
  customerDetails: CustomerDetails;
  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.service.getCustomerById().subscribe((data) => {
      this.customerDetails = data;
      console.log(this.customerDetails[0]);
    });
  }
}
