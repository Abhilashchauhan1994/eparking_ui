import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiDataService } from 'src/app/Services/api-data.service';

@Component({
  selector: 'app-parking-status',
  templateUrl: './parking-status.component.html',
  styleUrls: ['./parking-status.component.scss']
})
export class ParkingStatusComponent{

  term:string /*for seraching purpose*/
  parkingResponse: any[];

  constructor(private apiService: ApiDataService) { }

  ngOnInit(): void {
    this.apiService.getAllparkingDetails().subscribe(
      (data) => {this.parkingResponse =data;
      console.log(this.parkingResponse);})
  }

  getcolor(status: string): string{
    //return status === 'Active' ? '#7befb2' :'#d64541';
    if(status =='Active') return '#95d5b2'
    else if (status =='Warning') return '#ffbf69'
    else if(status =='Inactive') return '#f76c5e'
    else return 'fff1e6ff'
  }

  reNewParking(userId: number): void{

  }
}
