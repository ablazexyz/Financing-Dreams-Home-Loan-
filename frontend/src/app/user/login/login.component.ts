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
  constructor(private fb: FormBuilder, private service: UserService, private router: Router) {
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

    const loginDetails = new UserLogin(this.userLoginDetails.controls.emailId.value,
                                       this.userLoginDetails.controls.password.value);

    this.service.loginUser(loginDetails).subscribe(data => {
      // console.log(data);
      this.auth = Object.assign({}, data[0]);

      if (Object.keys(data).length === 1){
        console.log(this.auth);
        sessionStorage.setItem('username', this.auth.firstName);
        this.router.navigate(['/userDashboard']);
      }
      else{
        this.invalid = true;
        // alert('Invalid Credentials');
      }
    });
  }

}
