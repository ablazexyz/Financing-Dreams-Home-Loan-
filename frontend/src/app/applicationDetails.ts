export class ApplicationDetails {
  application_id: number;
  property_location: string;
  property_name: string;
  estimated_property_amt: number;
  loan_amount: number;
  interest_rate: number;
  tenure: number;
  LOA: string;
  NOC: string;
  agreement_to_sale: string;
  customer_id: number;
  loan_remarks: string;
  loan_status: string;

  constructor(
    property_location: string,
    property_name: string,
    estimated_property_amt: number,
    loan_amount: number,
    interest_rate: number,
    tenure: number,
    LOA: string,
    NOC: string,
    agreement_to_sale: string
  ) {
    this.property_location = property_location;
    this.property_name = property_name;
    this.estimated_property_amt = estimated_property_amt;
    this.loan_amount = loan_amount;
    this.interest_rate = interest_rate;
    this.tenure = tenure;
    this.LOA = LOA;
    this.NOC = NOC;
    this.agreement_to_sale = agreement_to_sale;
  }
}
