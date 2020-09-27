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
  admin: any;
  login: any;

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
    this.login = Object.assign({}, this.adminLogin.value);
    // console.log(this.login);

    this.service.authenticateAdmin(this.login).subscribe( data => {
      this.admin = Object.assign({}, data[0]);
      // console.log(Object.keys(data).length);
      if (Object.keys(data).length === 0){
        alert('Invalid Credentials');
      }
      else{
      //  alert('Login Success');
       console.log(this.admin);
       this.router.navigateByUrl('/adminDashboard');
      }
    });

  }
}
