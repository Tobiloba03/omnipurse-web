import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { LoginComponent } from './modules/auth/login/login.component';

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
}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
