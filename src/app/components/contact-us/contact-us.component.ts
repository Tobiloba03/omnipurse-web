import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactUs } from 'src/app/interfaces/interfaces';
import { FormService } from 'src/app/services/form.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  subscription: Subscription = new Subscription();
  isBusy: boolean = false;

  // Bound to form inputs
  eName: string = '';
  ePhone: string = '';
  eEmail: string = '';
  eSubject: string = '';
  eMessage: string = '';

  constructor(private formservice: FormService, private util: UtilService) {}

  ngOnInit(): void {}

  submitContactUs() {
    this.isBusy = true;

    const objContactUs: ContactUs = {
      Name: this.eName,
      PhoneNumber: this.ePhone,
      EmailAddress: this.eEmail,
      Subject: this.eSubject,
      Message: this.eMessage,
    };

    this.subscription = this.formservice
      .SubmitContactUs(objContactUs)
      .subscribe(
        (res) => {
          if (res.response === 'success') {
            this.clearFields();
            this.util.snackBarNotification(
              'Submitted successfully, we will reach out to you soon.'
            );
          }
          this.isBusy = false;
        },
        (err: any) => {
          this.isBusy = false;
          this.util.snackBarNotification(
            'Something went wrong, please check your internet connection'
          );
        }
      );
  }

  clearFields() {
    this.eName = '';
    this.ePhone = '';
    this.eEmail = '';
    this.eSubject = '';
    this.eMessage = '';
  }
}
