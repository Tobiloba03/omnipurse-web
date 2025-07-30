import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OmnipurseAcademyComponent } from './omnipurse-academy/omnipurse-academy.component';
import { OmnipurseTrainingsComponent } from './omnipurse-trainings/omnipurse-trainings.component';
import { OmnipurseInternshipsComponent } from './omnipurse-internships/omnipurse-internships.component';
import { OmnipurseCoursesComponent } from './omnipurse-courses/omnipurse-courses.component';
import { AcademyOverviewComponent } from './academy-overview/academy-overview.component';

const routes: Routes = [
  {
  path: 'academy-overview',
  component: AcademyOverviewComponent
},
{
  path: 'omnipurse-academy',
  component: OmnipurseAcademyComponent
},
{
  path: 'omnipurse-trainings',
  component: OmnipurseTrainingsComponent
},
{
  path: 'omnipurse-internships',
  component: OmnipurseInternshipsComponent
},
{
  path: 'omnipurse-courses',
  component: OmnipurseCoursesComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademyRoutingModule { }
