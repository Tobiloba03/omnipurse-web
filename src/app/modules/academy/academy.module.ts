import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademyRoutingModule } from './academy-routing.module';
import { AcademyOverviewComponent } from './academy-overview/academy-overview.component';
import { OmnipurseAcademyComponent } from './omnipurse-academy/omnipurse-academy.component';
import { OmnipurseTrainingsComponent } from './omnipurse-trainings/omnipurse-trainings.component';
import { OmnipurseInternshipsComponent } from './omnipurse-internships/omnipurse-internships.component';
import { ViewAcademyDetailsComponent } from './view-academy-details/view-academy-details.component';
import { OmnipurseCoursesComponent } from './omnipurse-courses/omnipurse-courses.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AcademyOverviewComponent,
    OmnipurseAcademyComponent,
    OmnipurseTrainingsComponent,
    OmnipurseInternshipsComponent,
    ViewAcademyDetailsComponent,
    OmnipurseCoursesComponent,
  ],
  imports: [
    CommonModule,
    AcademyRoutingModule,
    SharedModule
  ]
})
export class AcademyModule { }
