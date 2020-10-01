import { Config } from 'protractor';
import { Observable } from 'rxjs';
import { Register } from './../register';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerUser(RegisterDetails:Register):Observable<HttpResponse<Config>> {

    return this.http.post<Config>("http://localhost:9091/HomeApp/users/register", RegisterDetails, { observe: 'response' });
  }
}
