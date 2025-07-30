import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProductsModule } from './modules/products/products.module';
import { ConsultationComponent } from './modules/services/consultation/consultation.component';
import { ServicesModule } from './modules/services/services.module';
import { HttpClientModule } from '@angular/common/http';
import { WebsiteHeadMenuComponent } from './components/website-head-menu/website-head-menu.component';
import { ForgotPasswordComponent } from './modules/auth/forgot-password/forgot-password.component';
import { CreateAccountComponent } from './modules/auth/create-account/create-account.component';
import { AuthModule } from './modules/auth/auth.module';
import { AcademyOverviewComponent } from './modules/academy/academy-overview/academy-overview.component';
import { OmnipurseAcademyComponent } from './modules/academy/omnipurse-academy/omnipurse-academy.component';
import { OmnipurseTrainingsComponent } from './modules/academy/omnipurse-trainings/omnipurse-trainings.component';
import { OmnipurseInternshipsComponent } from './modules/academy/omnipurse-internships/omnipurse-internships.component';
import { ViewAcademyDetailsComponent } from './modules/academy/view-academy-details/view-academy-details.component';
import { OmnipurseCoursesComponent } from './modules/academy/omnipurse-courses/omnipurse-courses.component';
import { OmnipurseItServicesComponent } from './components/omnipurse-it-services/omnipurse-it-services.component';
import { FaqComponent } from './components/faq/faq.component';
import { JoinOurTeamComponent } from './components/join-our-team/join-our-team.component';
import { AcademyModule } from './modules/academy/academy.module';
import { BlogComponent } from './components/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    ConsultationComponent,
    ForgotPasswordComponent,
    CreateAccountComponent,
    OmnipurseItServicesComponent,
    FaqComponent,
    JoinOurTeamComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    ProductsModule,
    ServicesModule,
    AuthModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,

    MatNativeDateModule,

    BrowserAnimationsModule,
    HttpClientModule,

    ProductsModule,
    AcademyModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
