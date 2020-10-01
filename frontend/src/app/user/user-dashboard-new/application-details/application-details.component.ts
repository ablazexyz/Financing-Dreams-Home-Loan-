import { Router } from '@angular/router';
<<<<<<< HEAD
import { FormGroup, FormBuilder, Validators, ValidatorFn, FormControl, AbstractControl } from '@angular/forms';
=======
import { FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
>>>>>>> f68a3fa687e37f18d4358f231e39542faa510c2c
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { CustomerDetails } from '../../customerDetails';



@Component({
  selector: 'application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css'],
})


export class ApplicationDetailsComponent implements OnInit {

<<<<<<< HEAD
 
  salary: number;
=======
  salary: number = 20;
>>>>>>> f68a3fa687e37f18d4358f231e39542faa510c2c

  userDetail: CustomerDetails;

  applicationDetailsForm: FormGroup;

 
  constructor(private fb: FormBuilder, private router: Router, private service: UserService) {
    if (!sessionStorage.getItem('username')){
      this.router.navigate(['/userLogin']);
    }

    
    this.service.getUserDetails(sessionStorage.getItem('username')).subscribe(data=>{

<<<<<<< HEAD
      this.userDetail = data;
      alert(this.userDetail.salary);
    });
=======
      this.salary = 6;
      console.log(this.salary);
    });

>>>>>>> f68a3fa687e37f18d4358f231e39542faa510c2c

  }


  ngOnInit(): void {

    this.applicationDetailsForm = this.fb.group({
      property_location: ['', Validators.required],
      property_name: ['', Validators.required],
      estimated_property_amt: [
        '',
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      loan_amount: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.max(this.salary)]],
      interest_rate: [
        '',
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      tenure: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      LOA: [],
      NOC: [],
      agreement_to_sale: [],
    }, { validator: this.validateAmount});
  }
  validateAmount: ValidatorFn = (fg: FormGroup) => {
    const start = fg.get('estimated_property_amt').value;
    const end = fg.get('loan_amount').value;
    return start !== null && end !== null && start > end
     ? null : { range: true };
  }
  addApplicationDetails(): void {}
}
