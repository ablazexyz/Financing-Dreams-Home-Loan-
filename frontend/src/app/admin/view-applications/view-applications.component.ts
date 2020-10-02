import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/user/application';

@Component({
  selector: 'app-view-applications',
  templateUrl: './view-applications.component.html',
  styleUrls: ['./view-applications.component.css']
})
export class ViewApplicationsComponent implements OnInit {

  applications :Application[] = []
  constructor(private service: AdminService) { }

  ngOnInit(): void {

    this.service.getAllApplications().subscribe(data=>{

      this.applications = data;
      console.log(this.applications);
    })
  }

}
