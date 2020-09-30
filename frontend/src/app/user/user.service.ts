import { ApplicationDetails } from './../applicationDetails';
import { CustomerDetails } from './customerDetails';
// import { Register } from './register-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  registerUser(user): Observable<object> {
    return this.http.post('http://localhost:3000/users', user);
  }

  loginUser(user): Observable<object> {
    return this.http.get(
      'http://localhost:3000/users?email=' +
        user.email +
        '&password=' +
        user.password
    );
  }
  getCustomerById() {
    return this.http.get<CustomerDetails>(
      'http://localhost:3000/customers/?customerId=1'
    );
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
}
