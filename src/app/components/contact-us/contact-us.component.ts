import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactUs } from 'src/app/interfaces/interfaces';
import { FormService } from 'src/app/services/form.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent implements OnInit {
  subscription: Subscription = new Subscription();
  ePhone: string = "";
  eEmail: string = "";
  eName: string = "";
  eSubject: string = "";
  eMessage: string = "";
  objContactUs:ContactUs = {
    PhoneNumber : '',
    EmailAddress: '',
    Name: '',
    Subject: '',
    Message: ''
  }; 
  isBusy: boolean = false;
  constructor(private formservice: FormService, private util: UtilService) { }

  ngOnInit(): void {
  }

  submitContactUs()
  {
    this.isBusy = true;
    this.objContactUs = {
      PhoneNumber : this.ePhone,
      EmailAddress: this.eEmail,
      Name: this.eName,
      Subject: this.eSubject,
      Message: this.eMessage
    }
    
    this.subscription = this.formservice.SubmitContactUs(this.objContactUs).subscribe(res => 
    {
      if(res.response == 'success'){
        this.clearFields();
        this.isBusy = false;
        this.util.snackBarNotification("Submitted successfully, we will reach out to you soon.");
      }
    },
    (err:any) => {
      this.isBusy = false;
  
      return this.util.snackBarNotification(
        "Something went wrong, please check your internet connection"
      );
    });
  }

  clearFields()
  {
    this.ePhone = "";
    this.eEmail = "";
    this.eName = "";
    this.eSubject = "";
    this.eMessage = "";
  }

}