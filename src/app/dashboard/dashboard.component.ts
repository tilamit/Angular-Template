import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { groupBy } from 'rxjs/internal/operators/groupBy';
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

  constructor(private dataservice: UserService, private router: Router) { }

  ngOnInit() {
    //this.CheckUser();
    this.LoadEmpRatio();
    this.LoadLastFour();
  }

  public total: number = 0;
  public ratio: any;
  public lastFour: any;

  trafficChartData: any[];
  trafficChartLabels: string[];
  jsonToBeUsed: number[];

  public visitSaleChartData: any[];
  public visitSaleChartLabels: any[];

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
      debugger;
      this.dataservice.GetLastFour().subscribe(result => {
        this.lastFour = JSON.parse(result);

      
       console.log(this.lastFour);
      }, error => console.error(error));  
    }  
    

  trafficChartOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    },
    legend: false,
  };

    //Visitor Chart Colors
    /*visitSaleChartData = [{
      label: 'CHN',
      data: [20, 40, 15, 35, 25, 50, 30, 20],
      borderWidth: 1,
      fill: false,
    },
    {
      label: 'USA',
      data: [40, 30, 20, 10, 50, 15, 35, 40],
      borderWidth: 1,
      fill: false,
    },
    {
      label: 'UK',
      data: [70, 10, 30, 40, 25, 50, 15, 30],
      borderWidth: 1,
      fill: false,
    }];*/
  
    //visitSaleChartLabels = ["2013", "2014", "2014", "2015", "2016", "2017"];
  
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
