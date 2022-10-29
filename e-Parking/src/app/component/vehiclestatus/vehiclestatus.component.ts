import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserDetails } from 'src/app/MOdels/user-details';
import { VehicleDetails } from 'src/app/Models/vehicle-details';
import { ApiDataService } from 'src/app/Services/api-data.service';

@Component({
  selector: 'app-vehiclestatus',
  templateUrl: './vehiclestatus.component.html',
  styleUrls: ['./vehiclestatus.component.scss']
})
export class VehiclestatusComponent implements OnInit {

  currentDate= new Date();
  showcreatedialog=false;
  createUserform: FormGroup;
  userDetails: UserDetails[];
  responsemsg: string;
  constructor(private fb:FormBuilder, private apiService: ApiDataService) { }

  ngOnInit(): void {
    this.createUserform = this.fb.group({
      Vehiclename:[''],
      Vehiclecode:[''],
    })
  }

  showdelete(){
    console.log("button is pressed")
  this.showcreatedialog=true;
  console.log(this.showcreatedialog)
  }

  cancelevent(){
    this.showcreatedialog=false;
  }

  get cuf(){
    return this.createUserform.controls;
  }

  createVehicle(vehicleDetails :VehicleDetails){
    this.apiService.createVehicle(vehicleDetails).subscribe(
      (response) => {this.responsemsg})
  }
}
