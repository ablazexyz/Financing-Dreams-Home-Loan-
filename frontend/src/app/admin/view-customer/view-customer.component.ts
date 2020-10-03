import { Component, OnInit } from '@angular/core';
import { AdminService } from './../admin.service';
import { Application } from 'src/app/user/application';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  customer: Application;
  constructor(private service: AdminService) { }

  ngOnInit(): void {
    this.customer = this.service.getCustomer();
    // console.log(this.customer);
  }

}
