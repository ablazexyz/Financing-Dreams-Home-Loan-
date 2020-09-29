import { Register } from './../register';
import { UserService } from './../user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userRegisterDetails: FormGroup;
  register: Register;

  constructor(private fb: FormBuilder, private service: UserService) { }

  ngOnInit(): void {
    this.userRegisterDetails = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      gender: ['', Validators.required],
      nationality: ['', Validators.required],
      dateOfBirth: ['', Validators.required]
    });
  }

  RegisterUser(): void {

    // console.log(this.userRegister.value);
    // this.register = Object.assign({}, this.userRegister.value);
    // console.log(this.register);
    // let copy =JSON.parse(JSON.stringify(myObject))     ---------  to copy nested object

    const registerDetails = new Register(this.userRegisterDetails.controls.firstName.value,
                                          this.userRegisterDetails.controls.lastName.value,
                                          this.userRegisterDetails.controls.email.value,
                                          this.userRegisterDetails.controls.password.value,
                                          this.userRegisterDetails.controls.phoneNumber.value,
                                          this.userRegisterDetails.controls.gender.value,
                                          this.userRegisterDetails.controls.nationality.value,
                                          this.userRegisterDetails.controls.dateOfBirth.value);

    this.service.registerUser(registerDetails).subscribe(data => {
       console.log(data);
      //  this.auth = Object.assign({},data);
      //  console.log(this.auth.fname);
       console.log('user Registered Successfully');
     });
  }

}
