import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-emi-calc',
  templateUrl: './emi-calc.component.html',
  styleUrls: ['./emi-calc.component.css']
})
export class EmiCalcComponent implements OnInit {

  principal: number = 2500000;
  roi: number = 6.5;
  tenure: number = 10;

  aroi: number = this.roi / (12 * 100);


  emi: number = (this.principal * this.aroi) * Math.pow(1 + this.aroi, this.tenure * 12) / (Math.pow(1 + this.aroi, this.tenure * 12) - 1);
  interest: number = this.emi * this.tenure * 12 - this.principal;

  chart;
  updateFlag = false;
  Highcharts = Highcharts;
  chartConstructor = "chart";
  chartCallback;
  chartOptions = {
    tooltip: {
      pointFormat: '<b> Rs. {point.y:.0f}</b>'
    },
    title : {
      text: null  
   },
    plotOptions: {
      pie: {

        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
          style: {
            color: (Highcharts.theme) ||
              'black'
          }
        },
        shadow: false,
        center: ['50%', '50%'],
        size: '45%',
        innerSize: '20%'
      }
    },
    series: [
      {
        type: 'pie',
        data: [
          ["principal amount", this.principal],
          ["interest amount", this.interest]
        ]
      }
    ],
    exporting: {
      enabled: true
    },
    yAxis: {
      allowDecimals: false,
      title: {
        text: "Data"
      }
    }
  };

  constructor() {
    const self = this;

    this.chartCallback = chart => {
      // saving chart reference
      self.chart = chart;
    };
  }

  ngOnInit() { }

  updateChart() {

    this.aroi = this.roi / (12 * 100);
    this.emi = (this.principal * this.aroi) * Math.pow(1 + this.aroi, this.tenure * 12) / (Math.pow(1 + this.aroi, this.tenure * 12) - 1);
    this.interest = this.emi * 12 * this.tenure - this.principal;

    const self = this,
      chart = this.chart;

    chart.showLoading();
    setTimeout(() => {
      chart.hideLoading();

      self.chartOptions.series = [
        {
          type: 'pie',
          data: [
            ["principal amount", this.principal],
            ["interest amount", this.interest]
          ]
        }
      ];

      self.updateFlag = true;
    }, 2000);
  }
}


