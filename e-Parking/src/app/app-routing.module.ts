import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ParkingStatusComponent } from './component/parking-status/parking-status.component';
import { UserStatusComponent } from './component/user-status/user-status.component';
import { VehiclestatusComponent } from './component/vehiclestatus/vehiclestatus.component';

const routes: Routes = [
  {path: '', component:DashboardComponent},
  {path: 'home', component:DashboardComponent},
  {path:'dashboard', component:DashboardComponent},
  {path: 'parking', component:ParkingStatusComponent},
  {path: 'userDetails', component:UserStatusComponent},
  {path: 'vehicleDetails', component:VehiclestatusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
