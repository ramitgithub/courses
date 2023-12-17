import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  userData: any[]=[];
  timeSpentData: any = {};
  latestResults: any[]=[];
  constructor(private api : ApiService) {}

  ngOnInit(): void {
    this.api.getUserData().subscribe(data => {
      this.userData = data.dashboardData.userData;
      this.timeSpentData = data.dashboardData.timeSpentData;
      this.latestResults = data.dashboardData.lastestResults;
    });
  }

  parseValue(value: any): number {
    const percentage = parseFloat(value.replace('%', ''));
    return isNaN(percentage) ? 0 : percentage;
  }

  parsePercentage(value: any): number {
    if (isNaN(parseFloat(value))) {return 0;} else {return parseFloat(value);}
    
  }
  isValidPercentage(value: any): boolean {
    return typeof value === 'string' && !isNaN(parseFloat(value.replace('%', '')));
  }
  
}
