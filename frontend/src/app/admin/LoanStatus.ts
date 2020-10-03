export class LoanStatus{

    applId: number;
    loanRemarks: string;

    constructor(id:number,remarks:string){

        this.applId=id;
        this.loanRemarks=remarks;
    }
}