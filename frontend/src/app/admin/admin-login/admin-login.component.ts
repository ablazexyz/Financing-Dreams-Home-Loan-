import { AdminLogin } from './../adminLogin';
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
  adminDetails: AdminLogin;

  constructor(private fb: FormBuilder, private service: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.adminLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  authenticateAdmin(): void{

    // console.log(this.adminLogin.get('password').value);
    // console.log(this.adminLogin.controls.username.value);
    // this.loginDetails = Object.assign({}, this.adminLogin.value);
    // console.log(this.login);
    // console.log(Object.keys(data).length);

    const loginDetails = new AdminLogin(this.adminLogin.controls.username.value,
                                      this.adminLogin.controls.password.value);

    this.service.authenticateAdmin(loginDetails).subscribe( data => {
      this.adminDetails = Object.assign({}, data[0]);
      if (Object.keys(data).length === 0){
        alert('Invalid Credentials');
      }
      else{
      //  alert('Login Success');
       console.log(this.adminDetails);
       this.router.navigateByUrl('/adminDashboard');
      }
    });

  }
}
