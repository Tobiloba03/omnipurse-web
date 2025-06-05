import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { WebsiteHeadMenuComponent } from 'src/app/components/website-head-menu/website-head-menu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PasswordManagerComponent } from './password-manager/password-manager.component';

@NgModule({
  declarations: [
    LoginComponent,
    PasswordManagerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AuthRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    SharedModule
  ],
})
export class AuthModule {}
