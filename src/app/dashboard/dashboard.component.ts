import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/UserService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  toggleProBanner(event) {
    console.log("123");
    event.preventDefault();
    document.querySelector('body').classList.toggle('removeProbanner');
  }

  constructor(private dataservice: UserService, private router: Router, private datePipe: DatePipe) { }

  ngOnInit() {
    //this.CheckUser();
    this.LoadEmpRatio();
    this.LoadLastFour();
  }

  public total: number = 0;
  public ratio: any;
  lastFour: any[] = [];

  trafficChartData: any[];
  trafficChartLabels: string[];
  jsonToBeUsed: number[];

  visitSaleChartData = [];
  visitSaleChartLabels = [];

  arr1: any[];
  arr2: any[];
  arr3: any[];

  date: Date = new Date();

  //Traffic Chart Colors
  trafficChartColors = [
    {
      backgroundColor: [
        'rgba(177, 148, 250, 1)',
        'rgba(254, 112, 150, 1)',
        'rgba(132, 217, 210, 1)',
        'rgba(230, 217, 210, 1)',
        'rgba(240, 317, 220, 1)',
        'rgba(140, 317, 222, 1)'
      ],
      borderColor: [
        'rgba(177, 148, 250, 1)',
        'rgba(254, 112, 150, 1)',
        'rgba(132, 217, 210, 1)',
        'rgba(230, 217, 210, 1)',
        'rgba(240, 317, 220, 1)',
        'rgba(140, 317, 222, 1)'
      ]
    } 
  ];

  //Get Total Employee
  LoadEmpRatio() {
    debugger;
    this.dataservice.GetEmpRatio().subscribe(result => {
      this.ratio = JSON.parse(result);

      this.arr1 = this.ratio;
      this.arr2 = this.arr1.splice(4, 29);

      this.trafficChartData = [{
        data: this.arr2.map((x: any) => x.DATA),
        label: this.arr2.map((x: any) => x.LABEL),
      }];

      this.trafficChartLabels = this.arr2.map((x: any) => x.LABEL);
      console.log(this.ratio);
    }, error => console.error(error));
  }

  //Get Last Four Days Data
  LoadLastFour() {
    this.dataservice.GetLastFour().subscribe(
      result => {
        this.lastFour = JSON.parse(result);

        console.log(this.lastFour);

        // Group Last Four by Type
        let groupedByTypeResult: any[] = this.lastFour.reduce(function (
          obj: any,
          item: any
        ) {
          let type = item.EMP_TYPE;

          obj[type] = obj[type] || { label: item.EMP_TYPE, data: [] };
          obj[type].data.push(item.TOTAL);

          return obj;
        },
          {});

        //Remove key to append to chartData
        let chartData = [];
        for (let type in groupedByTypeResult) {
          chartData.push({
            label: groupedByTypeResult[type].label,
            data: groupedByTypeResult[type].data,
            borderWidth: 1,
            fill: false
          });
        }

        this.visitSaleChartData = chartData;

        //Distinct date for chartLabel
        this.visitSaleChartLabels = [
          ...new Map(
            this.lastFour.map(item => [
              item.ATT_DATE,
              this.datePipe.transform(item.ATT_DATE, 'yyyy-MM-dd')
            ])
          ).values()
        ];
      },
      error => console.error(error)
    );
  }

  trafficChartOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    },
    legend: false,
  };

  visitSaleChartOptions = {
    responsive: true,
    legend: false,
    scales: {
      yAxes: [{
        ticks: {
          display: false,
          min: 0,
          stepSize: 100,
          max: 5000
        },
        gridLines: {
          drawBorder: false,
          color: 'rgba(235,237,242,1)',
          zeroLineColor: 'rgba(235,237,242,1)'
        }
      }],
      xAxes: [{
        gridLines: {
          display: false,
          drawBorder: false,
          color: 'rgba(0,0,0,1)',
          zeroLineColor: 'rgba(235,237,242,1)'
        },
        ticks: {
          padding: 20,
          fontColor: "#9c9fa6",
          autoSkip: true,
        },
        categoryPercentage: 0.4,
        barPercentage: 0.4
      }]
    }
  };

  visitSaleChartColors = [
    {
      backgroundColor: [
        'rgba(154, 85, 255, 1)',
        'rgba(154, 85, 255, 1)',
        'rgba(154, 85, 255, 1)',
        'rgba(154, 85, 255, 1)',
        'rgba(154, 85, 255, 1)',
        'rgba(154, 85, 255, 1)',
      ],
      borderColor: [
        'rgba(154, 85, 255, 1)',
        'rgba(154, 85, 255, 1)',
        'rgba(154, 85, 255, 1)',
        'rgba(154, 85, 255, 1)',
        'rgba(154, 85, 255, 1)',
        'rgba(154, 85, 255, 1)',
      ]
    },
    {
      backgroundColor: [
        'rgba(254, 112, 150, 1)',
        'rgba(254, 112, 150, 1)',
        'rgba(254, 112, 150, 1)',
        'rgba(254, 112, 150, 1)',
        'rgba(254, 112, 150, 1)',
        'rgba(254, 112, 150, 1)',
      ],
      borderColor: [
        'rgba(254, 112, 150, 1)',
        'rgba(254, 112, 150, 1)',
        'rgba(254, 112, 150, 1)',
        'rgba(254, 112, 150, 1)',
        'rgba(254, 112, 150, 1)',
        'rgba(254, 112, 150, 1)',
      ]
    },
    {
      backgroundColor: [
        'rgba(177, 148, 250, 1)',
        'rgba(177, 148, 250, 1)',
        'rgba(177, 148, 250, 1)',
        'rgba(177, 148, 250, 1)',
        'rgba(177, 148, 250, 1)',
        'rgba(177, 148, 250, 1)',
      ],
      borderColor: [
        'rgba(177, 148, 250, 1)',
        'rgba(177, 148, 250, 1)',
        'rgba(177, 148, 250, 1)',
        'rgba(177, 148, 250, 1)',
        'rgba(177, 148, 250, 1)',
        'rgba(177, 148, 250, 1)',
      ]
    },
  ];

  CheckUser() {
    var checkStorage = localStorage.getItem('username');
    if (checkStorage == null) {
      this.router.navigate(['./login']);
    }
  }
}
