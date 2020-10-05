import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidatorFn,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { CustomerDetails } from '../../customerDetails';
import { Application } from '../../application';

const LoanAmtValidator: ValidatorFn = (fg: FormGroup) => {
  const pamt = fg.get('estimated_property_amt').value;
  const lamt = fg.get('loan_amount').value;
  if (pamt !== null && lamt !== null) {
    return pamt >= lamt ? null : { range: true };
  }
};

@Component({
  selector: 'application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css'],
})
export class ApplicationDetailsComponent implements OnInit {
  loanlimit: number;

  userDetail: CustomerDetails;

  applicationDetailsForm: FormGroup;

  applicationdetails: Application;
  isloaded: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: UserService
  ) {
    if (!sessionStorage.getItem('username')) {
      this.router.navigate(['/userLogin']);
    }
  }

  ngOnInit(): void {
    this.service
      .getUserDetails(sessionStorage.getItem('username'))
      .subscribe((data) => {
        this.loanlimit = data.salary * 60 * 0.6;

        console.log(this.loanlimit);

        this.applicationDetailsForm = this.fb.group(
          {
            property_location: ['', Validators.required],
            property_name: ['', Validators.required],
            estimated_property_amt: [
              '',
              [Validators.required, Validators.pattern('^[0-9]*$')],
            ],
            loan_amount: [
              '',
              [
                Validators.required,
                Validators.pattern('^[0-9]*$'),
                Validators.max(this.loanlimit),
              ],
            ],
            interest_rate: [
              '',
              [
                Validators.required,
                Validators.pattern(new RegExp(/^\d*(?:[.,]\d{1,2})?$/)),
              ],
            ],
            tenure: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
            LOA: [],
            NOC: [],
            agreement_to_sale: [],
          },
          {
            validator: LoanAmtValidator,
          } /*, { validator: this.validateAmount}*/
        );

        this.isloaded = true;
      });
  }
  /*
  validateAmount: ValidatorFn = (fg: FormGroup) => {
    const start = fg.get('estimated_property_amt').value;
    const end = fg.get('loan_amount').value;
    return start !== null && end !== null && start > end
     ? null : { range: true };
  }
  */
  addApplicationDetails(): void {
    this.applicationdetails = new Application(
      this.applicationDetailsForm.controls.property_location.value,
      this.applicationDetailsForm.controls.property_name.value,
      this.applicationDetailsForm.controls.estimated_property_amt.value,
      this.applicationDetailsForm.controls.loan_amount.value,
      this.applicationDetailsForm.controls.interest_rate.value,
      this.applicationDetailsForm.controls.tenure.value
    );

    this.service
      .addApplication(
        sessionStorage.getItem('username'),
        this.applicationdetails
      )
      .subscribe((data) => {
        this.applicationdetails = data;
        console.log(this.applicationdetails);
        this.router.navigate(['userDashboard/uploadDocuments'], {
          queryParams: {
            applicationId: this.applicationdetails.applicationId,
          },
        });
      });
  }
}
