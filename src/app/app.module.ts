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
import { LoginComponent } from './modules/auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProductsModule } from './modules/products/products.module';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { ServicesModule } from './modules/services/services.module';
import { HttpClientModule } from '@angular/common/http';
import { WebsiteHeadMenuComponent } from './components/website-head-menu/website-head-menu.component';
import { ForgotPasswordComponent } from './modules/auth/forgot-password/forgot-password.component';
import { CreateAccountComponent } from './modules/auth/create-account/create-account.component';
import { AuthModule } from './modules/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    ConsultationComponent,
    WebsiteHeadMenuComponent,
    ForgotPasswordComponent,
    CreateAccountComponent,
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

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
