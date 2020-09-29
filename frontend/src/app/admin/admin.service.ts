import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  authenticateAdmin(adminLogin): Observable<object>{
    return this.http.get('http://localhost:3000/admins?username=' + adminLogin.username + '&password=' + adminLogin.password);
  }


}
