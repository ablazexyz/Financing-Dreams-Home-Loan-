import { Account } from './Account';
import { ApplicationDetails } from './../applicationDetails';
import { CustomerDetails } from './customerDetails';
// import { Register } from './register-model';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from './register';
import { Application } from './application';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  loginUser(user): Observable<object> {
    return this.http.get(
      'http://localhost:3000/users?emailId=' +
        user.emailId +
        '&password=' +
        user.password
    );
  }

  getRegDetails(email: String): Observable<Register> {
    return this.http.get<Register>(
      'http://localhost:9091/HomeApp/users/isFirstTimeUser/' + email
    );
  }

  updatePass(reg: Register): Observable<Register> {
    return this.http.post<Register>(
      'http://localhost:9091/HomeApp/users/updatePass',
      reg
    );
  }

  getUserDetails(email: String): Observable<CustomerDetails> {
    return this.http.get<CustomerDetails>(
      'http://localhost:9091/HomeApp/users/customerdetails/' + email
    );
  }

  setUserDetails(
    email: String,
    custdetails: CustomerDetails
  ): Observable<Register> {
    console.log(custdetails);
    return this.http.post<Register>(
      'http://localhost:9091/HomeApp/users/customerdetails/' + email,
      custdetails
    );
  }

  addApplication(email: String, appl: Application): Observable<Application> {
    return this.http.post<Application>(
      'http://localhost:9091/HomeApp/users/applicationdetails/' + email,
      appl
    );
  }

  updateUserDetails(reg: Register): Observable<Register> {
    return this.http.post<Register>(
      'http://localhost:9091/HomeApp/users/customerdetails',
      reg
    );
  }

  getApplicationsbyEmail(email: String): Observable<Application[]> {
    return this.http.get<Application[]>(
      'http://localhost:9091/HomeApp/users/applicationdetails/' + email
    );
  }

  getApplicationDetailById(applicationId: number): Observable<Application> {
    return this.http.get<Application>(
      'http://localhost:9091/HomeApp/users/application/' + applicationId
    );
  }

  getAccountbyEmail(email: string): Observable<Account> {
    return this.http.get<Account>(
      'http://localhost:9091/HomeApp/users/account/' + email
    );
  }

  isFirstTimeUser(email: string): Observable<boolean> {
    return this.http.get<boolean>(
      'http://localhost:9091/HomeApp/users/isFirstTimeUser/' + email
    );
  }

  pushFileToStorage(
    file: File,
    userName: string,
    documentType: string
  ): Observable<HttpEvent<{}>> {
    const data: FormData = new FormData();
    data.append('file', file);
    const newRequest = new HttpRequest(
      'POST',
      'http://localhost:9091/HomeApp/users/fileUpload/' +
        userName +
        '/' +
        documentType,
      data,
      {
        reportProgress: true,
        responseType: 'text',
      }
    );
    return this.http.request(newRequest);
  }

  pushApplicationFilesToStorage(
    file: File,
    userName: string,
    applicationId: string,
    documentType: string
  ): Observable<HttpEvent<{}>> {
    const data: FormData = new FormData();
    data.append('file', file);
    const newRequest = new HttpRequest(
      'POST',
      'http://localhost:9091/HomeApp/users/fileUpload/' +
        userName +
        '/' +
        applicationId +
        '/' +
        documentType,
      data,
      {
        reportProgress: true,
        responseType: 'text',
      }
    );
    return this.http.request(newRequest);
  }

  downloadCustomerFilesFromStorage(
    userFolderName: string,
    documentType: string
  ): Observable<Blob> {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    return this.http.get<Blob>(
      'http://localhost:9091/HomeApp/users/fileDownload/' +
        userFolderName +
        '/' +
        documentType,
      { headers: headers, responseType: 'blob' as 'json' }
    );
  }

  downloadApplicationFilesFromStorage(
    userFolderName: string,
    applicationId: string,
    documentType: string
  ): Observable<Blob> {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    return this.http.get<Blob>(
      'http://localhost:9091/HomeApp/users/fileDownload/' +
        userFolderName +
        '/' +
        applicationId +
        '/' +
        documentType,
      { headers: headers, responseType: 'blob' as 'json' }
    );
  }
}
