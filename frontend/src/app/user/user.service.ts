// import { Register } from './register-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  registerUser(user): Observable<object>{
    return this.http.post('http://localhost:3000/users', user);
  }

  loginUser(user): Observable<object>{
    return this.http.get('http://localhost:3000/users?email=' + user.username + '&password=' + user.password);
  }
}
