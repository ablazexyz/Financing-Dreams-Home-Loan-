import { UserService } from './../user.service';
import { Register } from './../register-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userRegister: FormGroup;
  register: Register;
  // auth: any;
  constructor(private fb: FormBuilder, private service: UserService) { }

  ngOnInit(): void {
    this.userRegister = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      gender: ['', Validators.required],
      nationality: ['', Validators.required],
      dob: ['', Validators.required]
    });
  }

  RegisterUser(): void {

    // console.log(this.userRegister.value);
    this.register = Object.assign({}, this.userRegister.value);
    // console.log(this.register);

    this.service.registerUser(this.register).subscribe(data => {
       console.log(data);
      //  this.auth = Object.assign({},data);
      //  console.log(this.auth.fname);
     });
  }

}
