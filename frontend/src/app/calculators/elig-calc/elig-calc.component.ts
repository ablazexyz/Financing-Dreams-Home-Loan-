import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elig-calc',
  templateUrl: './elig-calc.component.html',
  styleUrls: ['./elig-calc.component.css']
})
export class EligCalcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  income:number = 60000
  loan:number = (this.income*0.6)*60

  updateloan(){

    this.loan = (this.income*0.6)*60;

  }
}
