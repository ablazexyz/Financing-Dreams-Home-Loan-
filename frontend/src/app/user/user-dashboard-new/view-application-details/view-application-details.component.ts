import { UserService } from './../../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApplicationDetails } from 'src/app/applicationDetails';

@Component({
  selector: 'view-application-details',
  templateUrl: './view-application-details.component.html',
  styleUrls: ['./view-application-details.component.css'],
})
export class ViewApplicationDetailsComponent implements OnInit {
  applicationId: number;
  applicationDetailToDisplay: ApplicationDetails;
  loadCompleted: boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: UserService
  ) {
    if (!sessionStorage.getItem('username')){
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
      },
      (error) => console.log(error),
      () => (this.loadCompleted = true)
    );
  }
}
