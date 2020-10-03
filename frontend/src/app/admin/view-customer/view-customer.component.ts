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

  remarks:string;

  approved:boolean = false;

  loanstatus: LoanStatus;

  constructor(private service: AdminService) { }

  ngOnInit(): void {
    this.customer = this.service.getCustomer();
    // console.log(this.customer);
  }

  approve(){

    this.approved= true;
  }


  submit(){

    this.loanstatus = new LoanStatus(this.customer.applicationId,this.remarks);
    if (this.approved){

      this.service.approveApplication(this.loanstatus).subscribe();
    }
    else{
      this.service.rejectApplication(this.loanstatus).subscribe(data=>{
        console.log(data);
      })
    }
  }

}
