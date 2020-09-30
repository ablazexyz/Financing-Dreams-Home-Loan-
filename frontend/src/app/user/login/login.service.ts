import { Config } from 'protractor';
import { Observable } from 'rxjs';
import { Login } from './../../admin/Login';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUser(login:Login): Observable<HttpResponse<Config>> {

    return this.http.post<Config>("http://localhost:9091/HomeApp/users/login",login, { observe: 'response' });
  }

}
