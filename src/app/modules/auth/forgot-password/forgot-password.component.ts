import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  
  email: string = '';
  isBusy: boolean = false;

  constructor(public dialogRef: MatDialogRef<ForgotPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private util: UtilService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.isBusy = true;
    this.authService.forgotPassword(this.email).subscribe(
      () => {
        this.util.snackBarNotification(
          'Password reset link sent!'
        )
        this.dialogRef.close();
      },
      (err:any) => {
        this.isBusy = false;
        this.util.snackBarNotification(
          'Something went wrong, please check your internet connection'
        )
      } 
    );
  }

  onCloseClick(){
    this.dialogRef.close();
  }

}
