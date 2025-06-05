import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { SoftwareSolutionsComponent } from './software-solutions/software-solutions';
import { BusinessDevelopmentComponent } from './business-development/business-development.component';
import { ServicesOverviewComponent } from './services-overview/services-overview.component';


@NgModule({
  declarations: [
    BusinessDevelopmentComponent,
    SoftwareSolutionsComponent,
    ServicesOverviewComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
