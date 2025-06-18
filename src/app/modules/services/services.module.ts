import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { SoftwareSolutionsComponent } from './software-solutions/software-solutions';
import { BusinessDevelopmentComponent } from './business-development/business-development.component';
import { ServicesOverviewComponent } from './services-overview/services-overview.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    BusinessDevelopmentComponent,
    SoftwareSolutionsComponent,
    ServicesOverviewComponent,
  ],
  imports: [CommonModule, ServicesRoutingModule, SharedModule],
})
export class ServicesModule {}
