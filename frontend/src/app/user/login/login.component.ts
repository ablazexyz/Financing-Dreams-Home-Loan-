import { LoginService } from './login.service';
import { Login } from './../../admin/Login';
import { UserLogin } from '../userLogin';
import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Register } from '../register';

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
  view = 'login';
  otpStatus = '';


  forgotbool: boolean = false;
  otpbool: boolean = false;
  otpboolw: boolean = false;
  passbool: boolean = false;
  email:string;
  otp:string;
  otpenter:string;
  pass:string;
  regdetails: Register;

  logindetails: Login;


  constructor(private fb: FormBuilder, private service: LoginService,private router: Router) {
    sessionStorage.removeItem('username');
  }

  ngOnInit(): void {
    this.userLoginDetails = this.fb.group({
      emailId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  forgot():void {

    this.forgotbool = true;
    this.view = 'forgot';
  }

  otpgen():void {

    this.forgotbool = false;
    this.otpbool = true;

    this.service.forgotpass(this.email).subscribe(data=>{
      this.otp = data;
    })

  }

  otpsubmit():void {

    if (this.otp==this.otpenter){
      this.otpbool = false;
      this.passbool = true;
      this.otpboolw = false;
    }

    else{
      this.otpboolw = true;
    }
  }

  passsubmit():void{

    this.logindetails = new Login(this.email,this.pass);

    this.service.updatepass(this.logindetails).subscribe(data=>{

      this.regdetails = data;
      sessionStorage.setItem('username', this.email);
      this.router.navigate(['/userDashboard']);

    })
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
