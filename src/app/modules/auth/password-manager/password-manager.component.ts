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
  isCBusy: boolean = false;
  eEmail: string = '';
  plainText: string = '';
  checkType: string = 'cipher';
  textType: string = '';
  textTypeInvert: string = '';
  eTextValue: string = '';
  outputValue: string = '';
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
          this.isBusy = false;
          return this.util.snackBarNotification(
          'success!'
        )
        }
        else
        {
          this.isBusy = false;
          return this.util.snackBarNotification(
          'failed!'
        )
        }
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


  oncheckTypeChange(){
    if(this.checkType === 'cipher')
    {
      this.textType = 'Cipher text';
      this.textTypeInvert = 'Plain text'
    }
    else
    {
      this.textType = 'Plain text';
      this.textTypeInvert = 'Cipher text'
    }
  }

  conversion(){
    this.oncheckTypeChange()
    if(this.eTextValue == '')
      return this.util.snackBarNotification(
          'Text value empty!');
          this.isCBusy = true;
    this.util.TextConversion(this.checkType, this.eTextValue).subscribe(
      (res) => {
        if(res === 'failed')
        {
          this.isCBusy = false;
          return this.util.snackBarNotification(
          'failed!'
        )
        }
        else
        {
          this.outputValue = res;
          this.isCBusy = false;
          return this.util.snackBarNotification(
          'success!'
        )
        
        }
        
      },
      (err:any) => {
        this.isBusy = false;
        this.util.snackBarNotification(
          'Something went wrong, please check your internet connection'
        )
      } 
    );
  }

  onConversionClearClick()
  {
    this.eTextValue = '';
  }

}
