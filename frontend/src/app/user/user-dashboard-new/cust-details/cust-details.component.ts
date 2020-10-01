import { Register } from './../../register';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../../customerDetails';
import { UserService } from '../../user.service';
import { Console } from 'console';

@Component({
  selector: 'cust-details',
  templateUrl: './cust-details.component.html',
  styleUrls: ['./cust-details.component.css'],
})
export class CustDetailsComponent implements OnInit {
  customerDetailsForm: FormGroup;

  regdetails: Register;

  custDetails: CustomerDetails;

  constructor(private fb: FormBuilder, private router: Router,  private service: UserService) {
    if (!sessionStorage.getItem('username')){
      this.router.navigate(['/userLogin']);
    }

    this.service.getUserDetails(sessionStorage.getItem('username')).subscribe(data => {

      this.regdetails = data;
      console.log(this.regdetails);

    });
  
  }

  ngOnInit(): void {

    

    this.customerDetailsForm = this.fb.group({
      aadhaar: [
        '',
        [
          Validators.required,
          Validators.minLength(12),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      PAN: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('^[0-9a-zA-Z]*$'),
        ],
      ],
      monthly_sal: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      type_of_employment: ['', Validators.required],
      retirement_age: ['', Validators.required],
      org_type: ['', Validators.required],
      employer_name: ['', Validators.required],
      pan_card: [''],
      voter_id: [''],
      salary_slip: [''],
    });
  }

  addCustomerDetails(): void {

    this.custDetails = new CustomerDetails(
                              this.customerDetailsForm.controls.aadhaar.value,
                              this.customerDetailsForm.controls.monthly_sal.value,
                              this.customerDetailsForm.controls.PAN.value,
                              this.customerDetailsForm.controls.type_of_employment.value,
                              this.customerDetailsForm.controls.org_type.value,
                              this.customerDetailsForm.controls.employer_name.value,
                              this.customerDetailsForm.controls.retirement_age.value);
    
    this.regdetails.setCustomerDetails(this.custDetails);

    this.service.updateUserDetails(this.regdetails).subscribe(data => {

      this.regdetails = data;
      console.log(this.regdetails);

    });
  }
}
