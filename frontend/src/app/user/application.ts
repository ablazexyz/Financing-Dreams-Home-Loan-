import { CustomerDetails } from './customerDetails';

export class Application{

  applicationId: number;
  propertyLocation: string;
  propertyName: string;
  propertyAmt: number;
  loanAmt: number;
  roi: number;
  tenure: number;
  loanStatus: string;
  loanRemarks: string;
  loanURL: string;
  nocURL: string;
  agreementURL: string;
  cdetails2: CustomerDetails;

  constructor(
    propertyLocation: string,
    propertyName: string,
    propertyAmt: number,
    loanAmt: number,
    roi: number,
    tenure: number)
    {
        this.propertyLocation = propertyLocation;
        this.propertyName = propertyName;
        this.propertyAmt = propertyAmt;
        this.loanAmt = loanAmt;
        this.roi = roi;
        this.tenure = tenure;
    }


}
