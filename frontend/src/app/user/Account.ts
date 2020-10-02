import { Loan } from "./Loan";

export class Account{

    accountNo: number;
    balance: number;
    cust_id: number;
    loans: Loan[];
}