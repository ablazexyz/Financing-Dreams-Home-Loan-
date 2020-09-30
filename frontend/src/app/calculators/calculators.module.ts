import { FormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmiCalcComponent } from './emi-calc/emi-calc.component';
import { EligCalcComponent } from './elig-calc/elig-calc.component';



@NgModule({
  declarations: [EmiCalcComponent, EligCalcComponent],
  imports: [
    CommonModule,HighchartsChartModule,FormsModule
  ],
  exports: [EmiCalcComponent, EligCalcComponent]
})
export class CalculatorsModule { }
