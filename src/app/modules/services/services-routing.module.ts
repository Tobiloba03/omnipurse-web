import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessDevelopmentComponent } from './business-development/business-development.component';
import { SoftwareDevelopmentComponent } from './software-development/software-development.component';
import { ServicesOverviewComponent } from './services-overview/services-overview.component';

const routes: Routes = [
  {
    path: 'business-development',
    component: BusinessDevelopmentComponent
  },
  {
    path: 'software-development',
    component: SoftwareDevelopmentComponent
  },
  {
    path: 'services-overview',
    component: ServicesOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
