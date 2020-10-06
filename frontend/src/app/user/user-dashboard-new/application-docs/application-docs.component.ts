import { CustomerDetails } from './../../customerDetails';
import { Register } from './../../register';
import { FormGroup } from '@angular/forms';
import { UserService } from './../../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEventType,
  HttpResponse,
} from '@angular/common/http';

@Component({
  selector: 'application-docs',
  templateUrl: './application-docs.component.html',
  styleUrls: ['./application-docs.component.css'],
})
export class ApplicationDocsComponent implements OnInit {
  applicationId: string;
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  isLOAUploaded: boolean = false;
  isLOASelected: boolean = false;
  isNOCUploaded: boolean = false;
  isNOCSelected: boolean = false;
  isAgreementToSaleUploaded: boolean = false;
  isAgreementToSaleSelected: boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: UserService
  ) {}

  ngOnInit(): void {
    this.applicationId = this.route.snapshot.queryParamMap.get('applicationId');
  }

  upload(documentType: string) {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.service
      .pushApplicationFilesToStorage(
        this.currentFileUpload,
        sessionStorage.getItem('username'),
        this.applicationId,
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
            if (documentType == 'LOA') {
              this.isLOAUploaded = true;
            } else if (documentType == 'NOC') {
              this.isNOCUploaded = true;
            } else if (documentType == 'agreementToSale') {
              this.isAgreementToSaleUploaded = true;
            }

            alert('File successfully uploaded');
            //this.selectedFiles = undefined;
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
    if (documentType == 'LOA') {
      if (this.selectedFiles.length > 0) {
        this.isLOASelected = true;
      } else {
        this.isLOASelected = false;
      }
    }

    if (documentType == 'NOC') {
      if (this.selectedFiles.length > 0) {
        this.isNOCSelected = true;
      } else {
        this.isNOCSelected = false;
      }
    }

    if (documentType == 'agreementToSale') {
      if (this.selectedFiles.length > 0) {
        this.isAgreementToSaleSelected = true;
      } else {
        this.isAgreementToSaleSelected = false;
      }
    }
  }

  viewUploadedDocument(documentType: string) {
    this.service
      .downloadCustomerFilesFromStorage(
        sessionStorage.getItem('username'),
        documentType
      )
      .subscribe((data) => {
        let file = URL.createObjectURL(data);
        window.open(file);
      });
  }

  // onUploadComplete(): void {
  //   this.router.navigate(['../userHome'], { relativeTo: this.route });
  // }
}
