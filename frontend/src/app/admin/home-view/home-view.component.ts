import { AdminService } from './../admin.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {
  approvedLoans: number;
  pendingLoans: number;
  constructor(private service: AdminService) { }

  ngOnInit(): void {
    this.service.getAllApplications().subscribe(data => {

      this.pendingLoans = data.length;
      // console.log(this.applications);
    });
    this.service.getAllApprovedLoans().subscribe(data => {
        this.approvedLoans = data.length;
    });
  }
  // setNav(): void{
  //   this.service.setNavTitle('application');
  // }

}
