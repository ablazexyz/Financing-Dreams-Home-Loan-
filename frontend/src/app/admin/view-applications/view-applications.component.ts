import { ActivatedRoute } from '@angular/router';
import { LoanDto } from './../../loanDto';
import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/user/application';
// import { Loan } from 'src/app/user/Loan';
// import { parse } from 'path';

@Component({
  selector: 'app-view-applications',
  templateUrl: './view-applications.component.html',
  styleUrls: ['./view-applications.component.css']
})
export class ViewApplicationsComponent implements OnInit {

  applications: Application[] = [];

  approved: LoanDto[] = [];

  viewType: string;

  constructor(private service: AdminService, private route: ActivatedRoute) {
   }

  ngOnInit(): void {

    this.viewType = this.route.snapshot.queryParamMap.get('view');
    // console.log(this.viewType === null);
    if (this.viewType === 'pending' || this.viewType == null){
      this.service.getAllApplications().subscribe(data => {
        this.applications = data;
        console.log(this.applications);
      });
    }
    else if (this.viewType === 'approved'){
      this.service.getAllApprovedLoans().subscribe(data => {
          this.approved = data;
          console.log(this.approved);
      });
   }
  }

  viewCustomer(app: Application): void{
    this.service.setCustomer(app);
    // console.log(app);
    // console.log(this.applications);
  }
  viewApprovedCustomer(app: LoanDto): void{
    this.service.setApprovedCustomer(app);
  }

}
