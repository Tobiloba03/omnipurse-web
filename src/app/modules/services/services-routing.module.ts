import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AiandIoTInnovationsComponent } from './ai-and-iot-innovations/ai-and-iot-innovations.component';
import { BusinessDevelopmentComponent } from './business-development/business-development.component';
import { SoftwareSolutionsComponent } from './software-solutions/software-solutions';
import { ServicesOverviewComponent } from './services-overview/services-overview.component';
import { ConsultationComponent } from './consultation/consultation.component';

const routes: Routes = [
  {
    path: 'business-development',
    component: BusinessDevelopmentComponent,
  },
  {
    path: 'software-solutions',
    component: SoftwareSolutionsComponent,
  },
  {
    path: 'services-overview',
    component: ServicesOverviewComponent,
  },
  {
    path: 'ai-and-iot-innovations',
    component: AiandIoTInnovationsComponent,
  },
  {
    path: 'consultation',
    component: ConsultationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
