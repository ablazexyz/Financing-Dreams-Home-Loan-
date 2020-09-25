import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  template: `
     <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6 col-md-6 form-container">
        <div class="col-lg-8 col-md-12 col-sm-9 col-xs-12 form-box text-center">
          <div class="logo">
            <img src="../../../assets/images/logo2.png" alt="Logo">
          </div>
          <div class="heading mb-4">
            <h3>User Login</h3>
          </div>
          <form [formGroup]="userLogin" (submit)=authenticateUser()>
            <div class="form-input form-group mb-3">
              <span><i class="fa fa-user fa-lg"></i></span>
              <input type="text" id="username" name="username" formControlName="username" placeholder="Username" >
              <div *ngIf="userLogin.controls.username.invalid && userLogin.controls.username.touched" class="mt-0 text-danger">Username field can't be empty</div>
            </div>
            <div class="form-input form-group mb-3">
              <span><i class="fa fa-lock fa-lg"></i></span>
              <input type="password" id="password" name="password" formControlName="password" placeholder="Password">
              <div *ngIf="userLogin.controls.password.invalid && userLogin.controls.password.touched" class="mt-0 text-danger">Password field can't be empty</div>
            </div>

            <div class="text-center">
              <button type="submit" class="btn" [disabled]="userLogin.invalid">Login</button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 d-none d-md-block image-container">
      <!-- Image -->
      </div>
    </div>
  </div>
  `,
  styles: [
    `
    .image-container{
  background: url(../../../assets/images/4-sq.jpg) center no-repeat;
  background-size: cover;
  height: 100vh;

}
.form-container{
  background-color: rgb(240, 245, 247);
  display: flex;
  justify-content: center;
}
.form-box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
}
.form-box h3{
  font-weight: bold;
  color: rgb(253, 186, 0)
}
.form-box .form-input{
  position: relative;
}
.form-box .form-input input{
  width: 100%;
  height: 40px;
  /* margin-bottom: 20px; */
  border: none;
  border-radius: 5px;
  outline: none;
  background: white;
  padding-left: 45px;
}
.form-box .form-input span{
  position: absolute;
  top: 8px;
  padding-left: 20px;
  color: rgb(223, 58, 47);
}
.form-box .form-input input::placeholder{
  padding-left: 0px;
}
.form-box .form-input input:focus,
.form-box .form-input input:valid{
  border-bottom: 2px solid rgb(35, 37, 34);
}
.form-box button[type="submit"]{
  border: none;
  cursor: pointer;
  width: 150px;
  height: 40px;
  border-right: 5px;
  background-color: rgb(255, 217, 0);
  font-weight: bold;
  transition: 0.5s;
}
.form-box button[type="submit"]:hover{
  box-shadow: 0px,9px,10px -2px rgba(0,0,0,0.55);
  -webkit-box-shadow: 0px,9px,10px -2px rgba(0, 0, 0, 0.55);
  -moz-box-shadow: 0px,9px,10px -2px rgba(0,0,0,0.55);
}

    `
  ]
})
export class LoginComponent implements OnInit {

  userLogin: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  authenticateUser(): void{
    console.log(this.userLogin.get('password').value);
    console.log(this.userLogin.controls.username.value);
  }

}
