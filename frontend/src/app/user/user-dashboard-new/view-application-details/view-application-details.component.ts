import { UserService } from './../../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApplicationDetails } from 'src/app/applicationDetails';
import { Application } from '../../application';

@Component({
  selector: 'view-application-details',
  templateUrl: './view-application-details.component.html',
  styleUrls: ['./view-application-details.component.css'],
})
export class ViewApplicationDetailsComponent implements OnInit {
  applicationId: number;

  applicationDetailToDisplay: Application;

  loadCompleted: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: UserService
  ) {
    if (!sessionStorage.getItem('username')) {
      this.router.navigate(['/userLogin']);
    }
  }

  ngOnInit(): void {
    this.applicationId = parseInt(
      this.route.snapshot.queryParamMap.get('application_id')
    );

    this.service.getApplicationDetailById(this.applicationId).subscribe(
      (data) => {
        this.applicationDetailToDisplay = data;
        console.log(this.applicationDetailToDisplay);
        console.log(
          'Customer Details:',
          this.applicationDetailToDisplay.cdetails2
        );
      },
      (error) => console.log(error),
      () => (this.loadCompleted = true)
    );
  }

  viewUploadedDocument(documentType: string) {
    this.service
      .downloadApplicationFilesFromStorage(
        sessionStorage.getItem('username'),
        this.applicationDetailToDisplay.applicationId.toString(),
        documentType
      )
      .subscribe((data) => {
        let file = URL.createObjectURL(data);
        window.open(file);
      });
  }
}
