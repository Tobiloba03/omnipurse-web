import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubscribeToNewsletter } from 'src/app/interfaces/interfaces';
import { FormService } from 'src/app/services/form.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: '                                                                                                                                                                                                                                                                                                                      ',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ePhone: string = '';
  eEmail: string = '';
  isBusy: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(private formService: FormService, private util: UtilService) { }

  ngOnInit(): void {
  }

  SubscribeToNewsletter()
  {
    debugger
    this.isBusy = true;
    if (this.eEmail === '')
        return this.util.snackBarNotification(
          'Enter email address'
        );
    const objSubscriber : SubscribeToNewsletter = {
      //PhoneNumber : this.ePhone,
      EmailAddress : this.eEmail
    };
    
    this.subscription = this.formService.SubscribeToNewsletter(objSubscriber)
    .subscribe( (res) => {
      if (res.response === 'success') {
        this.clearFields();
        this.util.snackBarNotification(
          'Subscribed successfully'
        );
      }
      else if (res.response === 'invalid email syntax')
        this.util.snackBarNotification(
          'Invalid email address, try again.'
        );
      else if (res.response === 'already subscribed')
        this.util.snackBarNotification(
          'Already subscribed'
        );
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
    //this.ePhone = '';
    this.eEmail = '';
  }

}
