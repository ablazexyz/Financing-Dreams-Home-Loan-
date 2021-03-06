import { Login } from './../Login';

import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLogin: FormGroup;
  adminDetails: Login;

  status: boolean;
  invalid:boolean;

  constructor(private fb: FormBuilder, private service: AdminService, private router: Router) {

    sessionStorage.removeItem("adminEmail");
  }

  ngOnInit(): void {
    this.adminLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  authenticateAdmin(): void{
    
    this.adminDetails = new Login(this.adminLogin.controls.username.value,
                                      this.adminLogin.controls.password.value);


    this.service.loginAdmin(this.adminDetails).subscribe(res => {

      if (res.status == 200) {
        this.status = true;
        console.log("SUCCESS",res.status)
        this.router.navigateByUrl('/adminDashboard');
      }
    },
      err => {
        if (err.status == 200) {
          this.status = true;
          console.log("error false",err.status)
          sessionStorage.setItem("adminEmail",this.adminLogin.controls.username.value)
          this.router.navigateByUrl('/adminDashboard');
        }
        else {
          this.status = false;
          console.log("error", err.status)
          console.log("Invalid Credentials");
          this.invalid = true;
        }

      });

  }
}
