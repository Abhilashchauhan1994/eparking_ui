import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

/*Third party Plugin*/
import { Ng2SearchPipeModule } from 'ng2-search-filter';
/*End*/

import { ParkingStatusComponent } from './component/parking-status/parking-status.component';
//import { HeaderComponent } from './component/header/header.component';
import { UserStatusComponent } from './component/user-status/user-status.component';
import { VehiclestatusComponent } from './component/vehiclestatus/vehiclestatus.component';
import { ApiDataService } from './Services/api-data.service';
import { DashboardModule } from './component/dashboard/dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent,
    ParkingStatusComponent,
    UserStatusComponent,
    VehiclestatusComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    //custom module created for dashboard
    DashboardModule,
    //custom module ends here
    HttpClientModule ,
    ReactiveFormsModule,
    Ng2SearchPipeModule,


  ],

  providers: [ApiDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
