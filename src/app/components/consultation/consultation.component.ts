import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'src/app/services/form.service';
import { OurservicesService } from 'src/app/services/ourservices.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent {
  eName: string = '';
  eEmail: string = '';
  ePhone: string = '';
  eScheduleDate: string = '';
  eScheduleTime: string = '';
  eIsCompany: string = '';
  isBusy: boolean = false;
  eCompanyName: string = '';
  eServiceId: number = 0;
  eAddtionalInfo: string = '';
  testimonials = [
    { name: 'Alice Johnson', feedback: 'Truly insightful consultation. Highly recommend!' },
    { name: 'Mark Smith', feedback: 'Professional and helpful. Cleared all my doubts.' },
    { name: 'Nina Patel', feedback: 'Gave me clarity and confidence in my decisions.' }
  ];
objServices: any;
  loggedUser: string = '';
  isLoggedIn: boolean = false;
  constructor(private router: Router,private formService: FormService, private util: UtilService, private ourservice: OurservicesService) {}

  ngOnInit(){
    this.getLoggedUser();
    this.getServices();
    this.liveChat();
  }

  bookNow() {
    // Logic for opening a booking modal or redirecting to a booking form
    alert('Booking feature coming soon!');
  }

  goToFAQ() {
    this.router.navigate(['/faq']);
  }

  bookConsultation(){
    this.bookConsultationValidation();
    const objBookConsultation: any = {
      Name: this.eName,
      Email: this.eEmail,
      Phone: this.ePhone,
      CompanyName: this.eCompanyName,
      ServiceID: this.eServiceId,
      ScheduleDate: this.eScheduleDate,
      ScheduleTime: this.eScheduleTime,
      AdditionalInfo: this.eAddtionalInfo,
      LoggedUser: this.loggedUser

    }
    this.isBusy = true;
    this.ourservice.BookConsultation(objBookConsultation)
        .subscribe((obj) => {
          
          if(obj.response === 'success')
          {
            this.clearFields();
            this.isBusy = false;
            return this.util.snackBarNotification(
              "Consultation Booked Successfully!"
            );
          }
          else
          {
            this.isBusy = false;
            return this.util.snackBarNotification(
              "Something went wrong"
            );
          }
        },
        (err:any) => {
          this.isBusy = false;
          return this.util.snackBarNotification(
            "Something went wrong, please check your internet connection"
          );
        }
      );
    
  }

  liveChat(){
    // Inject Tawk.to script
    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/68284ee23cb2bd190f12ce64/1iren89oj';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);
  }

  getServices(){
    {
      
      this.formService.GetServices()
        .subscribe((obj) => {
          
          if(obj.response === 'success')
          {
            this.objServices = [{ ServiceID: 0, ServiceName: "Select Service Area" }, ...obj.listService];
          }
          else
            return this.util.snackBarNotification(
              "Something went wrong"
            );
        },
        (err:any) => {
          debugger
          return this.util.snackBarNotification(
            "Something went wrong, please check your internet connection"
          );
        }
      );
    }
  }

  bookConsultationValidation(){
    if(this.eName === '')
      return this.util.snackBarNotification(
            "Enter Name!"
          );
          if(this.eEmail === '')
      return this.util.snackBarNotification(
            "Enter Email address!"
          );
    if(this.ePhone === '')
      return this.util.snackBarNotification(
            "Enter Phone number!"
          );
    if(this.eScheduleDate === '')
      return this.util.snackBarNotification(
            "Select a schedule date!"
          ); 
    if(this.eScheduleTime === '')
      return this.util.snackBarNotification(
            "Select a schedule time!"
          ); 
    if(this.eAddtionalInfo !== '' && this.eAddtionalInfo.length > 150)
      return this.util.snackBarNotification(
            "Additional Information is 150 letters MAX!"
          );     
  }

  getLoggedUser()
  {
    debugger
    const user = localStorage.getItem("user");
    if (user === null || user === "null") {
      this.loggedUser = '';
    }
    else
    {
      this.loggedUser = user;
    }
    this.pageModerator();
  }

  pageModerator()
  {
    if(this.loggedUser !== '')
    {
      this.isLoggedIn = true;
    }
  }

  clearFields()
  {
    this.eName = '';
    this.eEmail = '';
    this.ePhone = '';
    this.eCompanyName = '';
    this.eServiceId = 0;
    this.eScheduleDate = '';
    this.eScheduleTime = '';
    this.eAddtionalInfo = '';
  }
  
}
