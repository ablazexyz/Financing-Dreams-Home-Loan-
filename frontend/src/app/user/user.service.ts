import { ApplicationDetails } from './../applicationDetails';
import { CustomerDetails } from './customerDetails';
// import { Register } from './register-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from './register';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  loginUser(user): Observable<object>{
    return this.http.get('http://localhost:3000/users?emailId=' + user.emailId + '&password=' + user.password);
  }

  getUserDetails(email:String): Observable<Register>{

    return this.http.get<Register>('http://localhost:9091/HomeApp/users/isFirstTimeUser/'+email);
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
