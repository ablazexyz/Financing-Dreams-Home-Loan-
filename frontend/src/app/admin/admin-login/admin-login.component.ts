import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLogin: FormGroup;
  admin: any;
  login: any;

  constructor(private fb: FormBuilder, private service: AdminService) { }

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

    this.service.authenticateAdmin(this.adminLogin).subscribe( data => {
      this.admin = Object.assign({}, data[0]);
      console.log(this.admin);
      if (this.admin.valueOf.length === 0){
        alert('Invalid Credentials');
      }
      else{
       alert('Login Success');
      }
    });

  }
}
