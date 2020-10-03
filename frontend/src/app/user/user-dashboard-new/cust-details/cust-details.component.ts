import {
  HttpErrorResponse,
  HttpEventType,
  HttpResponse,
} from '@angular/common/http';
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

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  isPanUploaded: boolean = false;
  isPanSelected: boolean = false;
  isVoterIdUploaded: boolean = false;
  isVoterIdSelected: boolean = false;
  isSalarySlipUploaded: boolean = false;
  isSalarySlipSelected: boolean = false;
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
    this.customerDetailsForm = this.fb.group({
      aadhaar: [
        '',
        [
          Validators.required,
          Validators.minLength(12),
          Validators.maxLength(12),
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
      pan_card: ['', Validators.required],
      voter_id: [''],
      salary_slip: [''],
    });
  }

  addCustomerDetails(): void {
    console.log('Add customer called');

    this.custDetails = new CustomerDetails(
      this.customerDetailsForm.controls.aadhaar.value,
      this.customerDetailsForm.controls.monthly_sal.value,
      this.customerDetailsForm.controls.PAN.value,
      this.customerDetailsForm.controls.type_of_employment.value,
      this.customerDetailsForm.controls.org_type.value,
      this.customerDetailsForm.controls.employer_name.value,
      this.customerDetailsForm.controls.retirement_age.value
    );

    console.log('Customer Details', this.custDetails);

    console.log(
      'AADHAR VALUE',
      this.customerDetailsForm.controls.aadhaar.value
    );
    this.service
      .setUserDetails(sessionStorage.getItem('username'), this.custDetails)
      .subscribe((data) => {
        this.regdetails = data;
        console.log(this.regdetails);
        this.router.navigate(['/userDashboard/applicationDetails']);
      });
  }

  upload(documentType: string) {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.service
      .pushFileToStorage(
        this.currentFileUpload,
        sessionStorage.getItem('username'),
        documentType
      )
      .subscribe(
        (event) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress.percentage = Math.round(
              (100 * event.loaded) / event.total
            );
          } else if (event instanceof HttpResponse) {
            // if (documentType === 'pan') {
            //   localStorage.setItem('isPanUploaded', 'true');
            // } else if (documentType === 'aadhaar') {
            //   localStorage.setItem('isAadhaarUploaded', 'true');
            // }
            if (documentType == 'pan') {
              this.isPanUploaded = true;
            } else if (documentType == 'voter_id') {
              this.isVoterIdUploaded = true;
            } else if (documentType == 'salary_slip') {
              this.isSalarySlipUploaded = true;
            }

            alert('File successfully uploaded');
          }
          //this.selectedFiles = undefined;
        },
        (error) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status == 415) {
              alert('Please upload the file in pdf format');
              //this.selectedFiles = undefined;
            } else if (error.status == 417) {
              alert('File size should be less than 5 MB');
              //this.selectedFiles = undefined;
            } else {
              alert('File not uploaded, Please try again..');
              //this.selectedFiles = undefined;
            }
          }
        }
      );
  }

  selectFile(event, documentType: string) {
    console.log(event.target.files);
    this.selectedFiles = event.target.files;
    if (documentType == 'pan') {
      if (this.selectedFiles.length > 0) {
        this.isPanSelected = true;
      } else {
        this.isPanSelected = false;
      }
    }

    if (documentType == 'voter_id') {
      if (this.selectedFiles.length > 0) {
        this.isVoterIdSelected = true;
      } else {
        this.isVoterIdSelected = false;
      }
    }

    if (documentType == 'salary_slip') {
      if (this.selectedFiles.length > 0) {
        this.isSalarySlipSelected = true;
      } else {
        this.isSalarySlipSelected = false;
      }
    }
  }
}
