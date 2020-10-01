import { Register } from './register';

export class CustomerDetails {
  customer_id: number;
  aadhaar: number;
  salary: number;
  pan: string;
  emptype: string;
  orgtype: string;
  empname: string;
  retireage: number;
  panURL: string;
  voterURL: string;
  salaryURL: string;
  registration: Register;

  constructor(
    aadhaar: number,
    salary: number,
    pan: string,
    emptype: string,
    orgtype: string,
    empname: string,
    retireage: number
  ) {
    this.aadhaar = aadhaar;
    this.salary = salary;
    this.pan = pan;
    this.emptype = emptype;
    this.orgtype = orgtype;
    this.empname = empname;
    this.retireage = retireage;
  }
}
