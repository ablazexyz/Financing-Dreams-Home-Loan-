import { Login } from './Login';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  authenticateAdmin(adminLogin): Observable<object>{
    return this.http.get('http://localhost:3000/admins?username=' + adminLogin.username + '&password=' + adminLogin.password);
  }

  loginAdmin(login:Login): Observable<HttpResponse<Config>> {

    return this.http.post<Config>("http://localhost:9091/HomeApp/users/login",login, { observe: 'response' });
  }
}
