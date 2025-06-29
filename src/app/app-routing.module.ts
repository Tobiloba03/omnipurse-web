import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AcademyComponent } from './components/academy/academy.component';
import { OmnipurseInternshipsComponent } from './components/omnipurse-internships/omnipurse-internships.component';
import { OmnipurseTrainingsComponent } from './components/omnipurse-trainings/omnipurse-trainings.component';
import { OmnipurseAcademyComponent } from './components/omnipurse-academy/omnipurse-academy.component';

const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'contact-us',
  component: ContactUsComponent
},
{
  path: 'about-us',
  component: AboutUsComponent
},
{
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: 'products',
  loadChildren: () =>
    import('./modules/products/products.module').then(m => m.ProductsModule)
},
{
  path: 'consultation',
  component: ConsultationComponent
},
{
  path: 'services',
  loadChildren: () =>
    import('./modules/services/services.module').then(m => m.ServicesModule)
},
{
  path: 'auth',
  loadChildren: () =>
    import('./modules/auth/auth.module').then(m => m.AuthModule)
},
{
  path: 'academy',
  component: AcademyComponent
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
}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
