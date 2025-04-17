import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { SoftwareDevelopmentComponent } from './software-development/software-development.component';
import { BusinessDevelopmentComponent } from './business-development/business-development.component';
import { ServicesOverviewComponent } from './services-overview/services-overview.component';


@NgModule({
  declarations: [
    BusinessDevelopmentComponent,
    SoftwareDevelopmentComponent,
    ServicesOverviewComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
