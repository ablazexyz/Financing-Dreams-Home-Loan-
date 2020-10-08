import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/user/application';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-elig-calc',
  templateUrl: './elig-calc.component.html',
  styleUrls: ['./elig-calc.component.css']
})
export class EligCalcComponent implements OnInit {

  today: string;

  application: Application;
  appload: boolean;
  dobbool: boolean;
  appnull: boolean;
  dispbool: boolean;

  constructor(private service: UserService, private datePipe: DatePipe) { }


  ngOnInit(): void {
    let today = new Date();
  }

  income: number = 60000
  loan: number = (this.income * 0.6) * 60

  applId: number;
  dob: string;

  updateloan() {

    this.loan = (this.income * 0.6) * 60;

  }

  status() {

    this.dispbool = true;
    this.service.getApplicationStatusbyId(this.applId).subscribe(data => {

      this.application = data;
      if (data == null) {
        this.appnull = true;
        console.log("Incorrect Appl ID");
      }
      else {
        this.appload = true;
        this.appnull = false;
        console.log(this.application.cdetails2.registration.dob);
        this.dob = this.datePipe.transform(this.dob, 'yyyy-MM-dd');

        if (this.dob === this.application.cdetails2.registration.dob) {
          console.log("Matches")
          this.dobbool = true;
        }
        else {
          console.log("DOB Incorrect")
          this.dobbool = false;
        }
      }

    })
  }
}
