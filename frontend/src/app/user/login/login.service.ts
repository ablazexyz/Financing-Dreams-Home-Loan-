import { Config } from 'protractor';
import { Observable } from 'rxjs';
import { Login } from './../../admin/Login';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../register';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUser(login:Login): Observable<HttpResponse<Config>> {

    return this.http.post<Config>("http://localhost:9091/HomeApp/users/login",login, { observe: 'response' });
  }

  forgotpass(email:string): Observable<string>{

    return this.http.get<string>("http://localhost:9091/HomeApp/users/forgot/"+email);
  }

  updatepass( login:Login): Observable<Register>{

    return this.http.post<Register>("http://localhost:9091/HomeApp/users/updatePass/",login);
  }
}
