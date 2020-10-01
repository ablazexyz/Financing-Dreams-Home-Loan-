import { ApplicationDetails } from './../applicationDetails';
import { CustomerDetails } from './customerDetails';
// import { Register } from './register-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from './register';
import {Application} from './application'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  loginUser(user): Observable<object>{
    return this.http.get('http://localhost:3000/users?emailId=' + user.emailId + '&password=' + user.password);
  }

  getRegDetails(email:String): Observable<Register>{

    return this.http.get<Register>('http://localhost:9091/HomeApp/users/isFirstTimeUser/'+email);
  }

  getUserDetails(email:String): Observable<CustomerDetails>{

    return this.http.get<CustomerDetails>('http://localhost:9091/HomeApp/users/customerdetails/'+email);
  }

  setUserDetails(email:String, custdetails:CustomerDetails):Observable<Register>{

    console.log(custdetails);
    return this.http.post<Register>('http://localhost:9091/HomeApp/users/customerdetails/'+email,custdetails);
  }

  addApplication(email:String, appl:Application): Observable<Application>{

    return this.http.post<Application>('http://localhost:9091/HomeApp/users/applicationdetails/'+email,appl);
  }
  
  updateUserDetails(reg:Register): Observable<Register>{

    return this.http.post<Register>('http://localhost:9091/HomeApp/users/customerdetails',reg);
  }

  getApplicationsByCustomerId() {
    return this.http.get<ApplicationDetails[]>(
      'http://localhost:3000/applications/?customer_id=123'
    );
  }

  getApplicationDetailById(
    applicationId: number
  ): Observable<ApplicationDetails> {
    return this.http.get<ApplicationDetails>(
      'http://localhost:3000/applications/?application_id=' + applicationId
    );
  }

  isFirstTimeUser(email: string): Observable<boolean> {
    return this.http.get<boolean>(
      'http://localhost:9091/HomeApp/users/isFirstTimeUser/' + email
    );
  }
}
