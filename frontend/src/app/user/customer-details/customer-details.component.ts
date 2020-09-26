import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  template: `
    <div class="cust-details">
  <h3 class="cust-details-header">Add details</h3>
  <form [formGroup]="cDetails" (submit)=customerDetails()>
    <div class="form-group">
      <label for="aadhaar">Aadhaar Number</label>
      <input type="text" id="aadhaar" name="aadhaar" class="form-control" />
    </div>
    <div class="form-group">
      <label for="PAN">PAN</label>
      <input type="text" id="PAN" name="PAN" class="form-control" />
    </div>
    <div class="form-group">
      <label for="monthly_sal">Monthly Salary</label>
      <input
        type="text"
        id="monthly_sal"
        name="monthly_sal"
        class="form-control"
      />
    </div>
    <div class="form-row">
      <div class="form-group col-md-6 col-sm-12">
        <label for="type_of_employment">Type of Employment</label>
        <input
          type="text"
          id="type_of_employment"
          name="type_of_employment"
          class="form-control"
        />
      </div>
      <div class="form-group col-md-6 col-sm-12">
        <label for="retirement_age">Retirement Age</label>
        <input
          type="number"
          id="retirement_age"
          name="retirement_age"
          class="form-control"
        />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6 col-sm-12">
        <label for="org_type">Organisation Type</label>
        <input type="text" id="org_type" name="org_type" class="form-control" />
      </div>
      <div class="form-group col-md-6 col-sm-12">
        <label for="employer_name">Employer Name</label>
        <input
          type="number"
          id="employer_name"
          name="employer_name"
          class="form-control"
        />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-4 col-sm-6">
        <label for="pan_card">Upload PAN</label>
        <input
          type="file"
          class="form-control-file"
          id="pan_card"
          name="pan_card"
        />
      </div>
      <div class="form-group col-md-4 col-sm-6">
        <label for="voter_id">Voter Id</label>
        <input
          type="file"
          class="form-control-file"
          id="voter_id"
          name="voter_id"
        />
      </div>
      <div class="form-group col-md-4 col-sm-6">
        <label for="salary_slip">Salary Slip</label>
        <input
          type="file"
          class="form-control-file"
          id="salary_slip"
          name="salary_slip"
        />
      </div>
    </div>
    <div class="form-group text-center mt-2">
      <input type="submit" value="Submit" class="btn btn-primary" />
    </div>
  </form>
</div>

  `,
  styles: [
    `
    @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

.cust-details {
  max-width: 70%;
  margin: 0 auto;
}

.cust-details-header {
  font-family: "Roboto", sans-serif;
  text-align: center;
}

@media screen and (max-width: 600px) {
  .cust-details {
    max-width: 100%;
  }
}

@media screen and (min-width: 601px) and (max-width: 1000px) {
  .cust-details {
    max-width: 90%;
  }
}

@media screen and (min-width: 1001px) {
}

    `
  ]
})
export class CustomerDetailsComponent implements OnInit {

  cDetails: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  customerDetails(): void {

  }

}
