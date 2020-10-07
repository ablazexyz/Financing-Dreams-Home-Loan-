import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import { Register } from './../register';
import { UserService } from './../user.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn,
  FormControl,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

const PasswordMatchValidator: ValidatorFn = (fg: FormGroup) => {
  // console.log(fg.errors);
  const pass = fg.get('password').value;
  const confirmPass = fg.get('cpassword').value;
  console.log(fg.get('cpassword').errors);
  return pass == confirmPass ? null : { notSame: true };
};
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  userRegisterDetails: FormGroup;
  register: Register;

  registerDetails: Register;
  dob: string;
  status: boolean = false;

  registrationbool: boolean = false;
  creatingbool: boolean = true;
  loginbool: boolean = false;
  today: string;
  constructor(
    private fb: FormBuilder,
    private service: RegisterService,
    private datePipe: DatePipe,
    private router: Router
  ) {}

  ngOnInit(): void {
    let today = new Date();
    let month = today.getMonth() + 1;
    let month_string = month.toString();
    let day = today.getDate();
    let day_string = day.toString();
    let year = today.getFullYear();
    let year_string = year.toString();
    if (month < 10) {
      month_string = '0' + month_string;
    }
    if (day < 10) {
      day_string = '0' + day_string;
    }
    this.today = year_string + '-' + month_string + '-' + day_string;
    this.userRegisterDetails = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
            ),
          ],
        ],
        cpassword: [
          '',
          [Validators.required, this.confirmPassword('password')],
        ],
        phoneNumber: [
          '',
          [Validators.required, Validators.pattern('[0-9 ]{10}')],
        ],
        gender: ['', Validators.required],
        nationality: ['', Validators.required],
        dateOfBirth: ['', [Validators.required, this.dateChecker]],
      }
      // { validator: PasswordMatchValidator }
    );
  }

  confirmPassword(password: string): ValidatorFn {
    return (control: FormControl) => {
      if (!control || !control.parent) {
        return null;
      }
      let cpassword = control.value;
      if (cpassword !== control.parent.get(password).value) {
        return {
          notSame: true,
        };
      }
      return null;
    };
  }

  dateChecker: ValidatorFn = (control: FormControl) => {
    if (!control || !control.parent) {
      return null;
    }
    console.log('hi');
    let today = new Date();
    let birthDate = new Date(control.value);

    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age < 18 ? { underAge: true } : null;
  };

  // passwordConfirming(c: AbstractControl): { notSame: boolean } {
  //   if (c.get('password').value !== c.get('cpassword').value) {
  //     return { notSame: true };
  //   }
  // }

  RegisterUser(): void {
    this.dob = this.userRegisterDetails.controls.dateOfBirth.value;
    this.dob = this.datePipe.transform(this.dob, 'yyyy-MM-dd');

    // console.log(this.userRegister.value);
    // this.register = Object.assign({}, this.userRegister.value);
    // console.log(this.register);
    // let copy =JSON.parse(JSON.stringify(myObject))     ---------  to copy nested object

    this.registerDetails = new Register(
      this.userRegisterDetails.controls.firstName.value,
      this.userRegisterDetails.controls.lastName.value,
      this.userRegisterDetails.controls.email.value,
      this.userRegisterDetails.controls.password.value,
      this.userRegisterDetails.controls.phoneNumber.value,
      this.userRegisterDetails.controls.gender.value,
      this.userRegisterDetails.controls.nationality.value,
      this.dob
    );

    this.service.registerUser(this.registerDetails).subscribe(
      (res) => {
        if (res.status == 200) {
          this.status = false;
          console.log('SUCCESS', res.status);
          this.registrationbool = true;
          this.creatingbool = false;
        }
      },
      (err) => {
        if (err.status == 200) {
          this.status = false;
          console.log('error false', err.status);
          this.registrationbool = true;
          this.creatingbool = false;
        } else {
          this.status = true;
          this.creatingbool = false;
        }
      }
    );
  }

  login(): void {
    this.loginbool = true;
    this.router.navigate(['/userLogin']);
  }
}
