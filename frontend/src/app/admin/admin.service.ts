import { LoanDto } from './../loanDto';
import { LoanStatus } from './LoanStatus';

import { Login } from './Login';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from 'protractor';
import { Application } from '../user/application';
import { Loan } from '../user/Loan';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  customer: Application ;
  approvedCustomer: LoanDto;

  constructor(private http: HttpClient) { }

  // authenticateAdmin(adminLogin): Observable<object>{
  //   return this.http.get('http://localhost:3000/admins?username=' + adminLogin.username + '&password=' + adminLogin.password);
  // }

  loginAdmin(login: Login): Observable<HttpResponse<Config>> {

    return this.http.post<Config>('http://localhost:9091/HomeApp/users/adlogin', login, { observe: 'response' });
  }

  getAllApplications(): Observable<Application[]>{

    return this.http.get<Application[]>('http://localhost:9091/HomeApp/admin/applications');
  }
  getAllApprovedLoans(): Observable<LoanDto[]>{

    return this.http.get<LoanDto[]>('http://localhost:9091/HomeApp/admin/loans');
  }

  approveApplication(loanstatus: LoanStatus){

    return this.http.post('http://localhost:9091/HomeApp/admin/approve',loanstatus);
  }

  rejectApplication(loanstatus: LoanStatus): Observable<Application>{

    return this.http.post<Application>('http://localhost:9091/HomeApp/admin/reject',loanstatus);
  }


  setCustomer(app: Application): void{
    this.customer = app;
  }
  getCustomer(): Application{
    return this.customer;
  }
  setApprovedCustomer(app: LoanDto): void{
    this.approvedCustomer = app;
  }
  getApprovedCustomer(): LoanDto{
    return this.approvedCustomer;
  }
}
