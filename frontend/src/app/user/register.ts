import { CustomerDetails } from './customerDetails';

export class Register{
  firstName: string;
  lastName: string;
  emailId: string;
  password: string;
  phoneNumber: number;
  gender: string;
  nationality: string;
  dob: string;
  cdetails: CustomerDetails;

  constructor(firstName: string, lastName: string, email: string, password: string, phoneNumber: number,
              gender: string, nationality: string, dateOfBirth: string){
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailId = email;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.gender = gender;
    this.nationality = nationality;
    this.dob = dateOfBirth;
  }

  getCustomerDetails(): CustomerDetails{
    return this.cdetails;
  }

  setCustomerDetails(custdetails:CustomerDetails) {
    this.cdetails = custdetails;
  }

}
