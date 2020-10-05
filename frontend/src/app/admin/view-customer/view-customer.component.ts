import { LoanDto } from './../../loanDto';
import { ActivatedRoute } from '@angular/router';
import { LoanStatus } from './../LoanStatus';
import { Component, OnInit } from '@angular/core';
import { AdminService } from './../admin.service';
import { Application } from 'src/app/user/application';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  customer: Application;

  approvedCustomer: LoanDto;

  remarks: string;

  approved = false;

  loanstatus: LoanStatus;

  viewType: string;

  constructor(private service: AdminService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.viewType = this.route.snapshot.queryParamMap.get('view');

    if (this.viewType === 'pending'){
      this.customer = this.service.getCustomer();
    }
    else if (this.viewType === 'approved'){
      this.approvedCustomer = this.service.getApprovedCustomer();
      console.log(this.approvedCustomer);
      this.customer = this.approvedCustomer.application;
    }
    console.log(this.approvedCustomer);

    // console.log(this.customer);
  }

  approve(): void{

    this.approved = true;
  }


  submit(): void{

    this.loanstatus = new LoanStatus(this.customer.applicationId,this.remarks);
    if (this.approved){

      this.service.approveApplication(this.loanstatus).subscribe();
    }
    else{
      this.service.rejectApplication(this.loanstatus).subscribe(data => {
        console.log(data);
      });
    }
  }

}