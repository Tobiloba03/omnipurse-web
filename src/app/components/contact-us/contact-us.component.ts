import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  contactForm!: FormGroup;
  subscription: Subscription = new Subscription();
  eName: string = '';
  ePhone: string = '';
  eEmail: string = '';
  eSubject: string = '';
  eMessage: string = '';
  objContactUs: ContactUs = {
    Name: '',
    PhoneNumber: '',
    EmailAddress: '',
    Subject: '',
    Message: '',
  };
  isBusy: boolean = false;

  constructor(
    private formservice: FormService,
    private util: UtilService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  submitContactUs() {
    this.isBusy = true;

    const formValues = this.contactForm.value;

    const objContactUs: ContactUs = {
      Name: formValues.name,
      PhoneNumber: formValues.phoneNumber,
      EmailAddress: formValues.emailAddress,
      Subject: formValues.subject,
      Message: formValues.message,
    };

    this.subscription = this.formservice
      .SubmitContactUs(objContactUs)
      .subscribe(
        (res) => {
          if (res.response === 'success') {
            this.contactForm.reset();
            this.util.snackBarNotification(
              'Submitted successfully, we will reach out to you soon.'
            );
          }
          this.isBusy = false;
        },
        (err: any) => {
          this.isBusy = false;
          return this.util.snackBarNotification(
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
