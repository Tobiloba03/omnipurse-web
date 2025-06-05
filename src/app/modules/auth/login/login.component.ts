import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { CreateAccountComponent } from '../create-account/create-account.component';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginObj } from 'src/app/interfaces/interfaces';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isBusy: boolean = false;
  eEmail: string = '';
  ePassword: string = '';
  objLogin: LoginObj = {
    Email: '',
    Password: ''
  }
  rememberMe: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private dialog: MatDialog,
    private router: Router,
    private util: UtilService
  ) {
    
  }

  onUserLogin(){
    debugger
    this.isBusy = true;
    this.objLogin = {
      Email: this.eEmail,
      Password: this.ePassword
    }
    this.authService.login(this.objLogin).subscribe(
      (res) => {
        if(res.response === 'email invalid')
        {
          this.util.snackBarNotification(
          'Invalid email address!'
        )
        }
        else if(res.response === 'success')
        {
          if(res.isUserMatch)
          {
            localStorage.setItem('user', this.eEmail);
                this.util.snackBarNotification(
              'Sign-in Success!');
                if (this.rememberMe) {
                    localStorage.setItem('rememberedEmail', this.eEmail);
                  } else {
                    localStorage.removeItem('rememberedEmail');
                  }
                    this.router.navigate(['']);
          }
          else
          {
            this.util.snackBarNotification(
              'Sign-in failed!, check that email and password entered are correct.');
          }
        }
        else if(res.response === 'failed')
        {
          this.util.snackBarNotification(
          'Something went wrong.'
        )
        }
        this.isBusy = false;
      },
      (err) => {
        console.error('Login failed:', err);
        this.isBusy = false;
        this.util.snackBarNotification(
          'Something went wrong, please check your internet connection'
        )
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
