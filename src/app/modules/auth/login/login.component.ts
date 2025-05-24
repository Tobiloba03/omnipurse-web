import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { CreateAccountComponent } from '../create-account/create-account.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private dialog: MatDialog
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  onLogin(): void {
    if (this.loginForm.invalid) return;

    const { email, password, rememberMe } = this.loginForm.value;

    this.authService.login({ email, password }).subscribe(
      (res) => {
        console.log('Login success:', res);
        if (rememberMe) {
          localStorage.setItem('rememberedEmail', email);
        } else {
          localStorage.removeItem('rememberedEmail');
        }
        // Navigate or show success
      },
      (err) => {
        console.error('Login failed:', err);
      }
    );
  }

  openForgotPassword(): void {
    this.dialog.open(ForgotPasswordComponent, {
      autoFocus: false,
      width: "60vw",
      height: "80vh",
      disableClose: true,
    });
  }

  openCreateAccount(): void {
    this.dialog.open(CreateAccountComponent, {
      autoFocus: false,
      width: "60vw",
      height: "80vh",
      disableClose: true,
    });
  }
}
