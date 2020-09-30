import { Register1 } from './register1';

export class CustomerDetails {
  customerId: number;
  aadhaar: number;
  pan: string;
  monthly_sal: number;
  type_of_employment: string;
  retirement_age: number;
  organisation_type: string;
  employer_name: string;
  pan_card: string;
  voter_id: string;
  salary_slip: string;
  registration_details: Register1;

  constructor(
    customerId: number,
    aadhaar: number,
    pan: string,
    monthly_sal: number,
    type_of_employment: string,
    retirement_age: number,
    organisation_type: string,
    employer_name: string,
    pan_card: string,
    voter_id: string,
    salary_slip: string,
    registration_details: Register1
  ) {
    this.customerId = customerId;
    this.aadhaar = aadhaar;
    this.pan = pan;
    this.monthly_sal = monthly_sal;
    this.type_of_employment = type_of_employment;
    this.retirement_age = retirement_age;
    this.organisation_type = organisation_type;
    this.employer_name = employer_name;
    this.pan_card = pan_card;
    this.voter_id = voter_id;
    this.salary_slip = salary_slip;
    this.registration_details = registration_details;
  }
}
