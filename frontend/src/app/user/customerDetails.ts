import { Register } from './register';

export class CustomerDetails {
  customer_id: number;
  aadhar: number;
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
    aadhar: number,
    salary: number,
    pan: string,
    emptype: string,
    orgtype: string,
    empname: string,
    retireage: number
  ) {
    this.aadhar = aadhar;
    this.salary = salary;
    this.pan = pan;
    this.emptype = emptype;
    this.orgtype = orgtype;
    this.empname = empname;
    this.retireage = retireage;
  }
}
