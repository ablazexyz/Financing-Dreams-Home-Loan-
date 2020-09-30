import { LoginService } from './login.service';
import { Login } from './../../admin/Login';
import { UserLogin } from '../userLogin';
import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoginDetails: FormGroup;
  login: any;
  auth: any;
  invalid = false;

  logindetails: Login;

  constructor(private fb: FormBuilder, private service: LoginService, private router: Router) {
    sessionStorage.removeItem('username');
  }

  ngOnInit(): void {
    this.userLoginDetails = this.fb.group({
      emailId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  authenticateUser(): void{
    // this.login = Object.assign({}, this.userLoginDetails.value);
    // console.log(this.userLogin.controls.username.value);

    this.logindetails = new Login(this.userLoginDetails.controls.emailId.value,
                                       this.userLoginDetails.controls.password.value);

    this.service.loginUser(this.logindetails).subscribe(res => {
      
      if (res.status == 200) {

        console.log("SUCCESS",res.status)
        sessionStorage.setItem('username', this.userLoginDetails.controls.emailId.value);
        this.router.navigate(['/userDashboard']);
      }
    },
      err => {
        if (err.status == 200) {
         
          console.log("error false",err.status)
          sessionStorage.setItem('username', this.userLoginDetails.controls.emailId.value);
          this.router.navigate(['/userDashboard']);
        }
        else {
          this.invalid = true;
          console.log("error", err.status)
          console.log("Invalid Credentials");
        }

      });

     
  }

}
