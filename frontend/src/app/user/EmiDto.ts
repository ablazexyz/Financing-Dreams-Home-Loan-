export class EmiDto{

    date: string;
    beginningBalance: string;
    emi: string;
    principal: string;
    interest: string;
    endingBalance: string;
    status: string;

    constructor(dt:string, bbalance:string, emiamt:string, prin:string, roi:string, ebalance:string, stat:string) {

        this.date = dt;
        this.beginningBalance = bbalance;
        this.emi = emiamt;
        this.principal = prin;
        this.interest = roi;
        this.beginningBalance = bbalance;
        this.endingBalance = ebalance;
        this.status = stat;
        
	}
}