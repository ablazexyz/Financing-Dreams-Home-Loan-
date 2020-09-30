import { Register } from './../register';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerUser(RegisterDetails:Register){

    return this.http.post("http://localhost:9091/HomeApp/users/register", RegisterDetails);
  }
}
