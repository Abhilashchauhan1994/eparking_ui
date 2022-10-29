import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StaticsDataService } from 'src/app/Services/statics-data.service';
//import {single} from '../data';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

   //single: any[];
  results: any[];
  view: any[] = [600,200];
  active =1200;
  inactive=500;
  Warning=1000;

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private dataService: StaticsDataService) {
   // Object.assign(this, { single });
  }

  ngOnInit(): void {
    this.dataService.getParkingUserData().subscribe(
      (data) => {this.results = data;
      console.log(this.results);})
  }

}
