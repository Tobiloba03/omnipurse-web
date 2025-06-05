import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-password-manager',
  templateUrl: './password-manager.component.html',
  styleUrls: ['./password-manager.component.css']
})
export class PasswordManagerComponent implements OnInit {
  isBusy: boolean = false;
  eEmail: string = '';
  plainText: string = '';
  constructor(
    private util: UtilService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.isBusy = true;
    this.authService.RetrievePassword(this.eEmail).subscribe(
      (res) => {
        if(res.response === 'success')
        {
          this.plainText = res.plainText;
          this.util.snackBarNotification(
          'success!'
        )
        }
        else
        this.util.snackBarNotification(
          'failed!'
        )
        this.isBusy = false;
      },
      (err:any) => {
        this.isBusy = false;
        this.util.snackBarNotification(
          'Something went wrong, please check your internet connection'
        )
      } 
    );
  }

  onClearClick()
  {
    this.plainText = '';
    this.eEmail = '';
  }

}
