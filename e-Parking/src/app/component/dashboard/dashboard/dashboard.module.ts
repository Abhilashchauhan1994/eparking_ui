import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DashboardComponent } from '../dashboard.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HeaderComponent } from '../../header/header.component';



@NgModule({
  declarations: [DashboardComponent,HeaderComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    AppRoutingModule,
  ],
  exports: [DashboardComponent,HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
