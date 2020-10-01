import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cust-details',
  templateUrl: './cust-details.component.html',
  styleUrls: ['./cust-details.component.css'],
})
export class CustDetailsComponent implements OnInit {
  customerDetailsForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    if (!sessionStorage.getItem('username')){
      this.router.navigate(['/userLogin']);
    }
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
    console.log(this.customerDetailsForm.controls.aadhaar.value);

  }
}
