import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-omnipurse-internships',
  templateUrl: './omnipurse-internships.component.html',
  styleUrls: ['./omnipurse-internships.component.css']
})
export class OmnipurseInternshipsComponent implements OnInit, AfterViewInit {
  isBusy: boolean = false;
  
  loggedUser: string = 'internship';
  objCountrys: any[] = [];
  objStates: any[] = [];

  eFirstName: string = '';
  eLastName: string = '';
  eEmail: string = '';
  ePhone: string = '';
  eGender: string = '';
  eDOB: string = '';
  eAddress: string = '';
  eEducationLevel: string = '';
  eSchool: string = '';
  eCourseofStudy: string = '';
  eSkills: string = '';
  eStartDate: string = '';
  eEndDate: string = '';
  eCoverLetter: string = '';
  eCountryId: number = 0;
  eStateId: number = 0;
  eDuration: string = ''

  firstSpoolValid: boolean = true;
@ViewChild('carousel') carousel!: ElementRef;
testimonials = [
    {
      image: 'assets/iMG/student-testimonial1.jpg',
      message: `I am delighted that you have taken the time to visit our website. It means you are considering a meaningful and lasting investment in your child's future and that is something we do not take lightly.

At Beautiful Beginning Academy, we are more than a school. We are a caring, committed community where each child is known, supported, and inspired to reach their highest potential.

I invite you to explore all we offer and discover how we can partner with you to give your child a strong, confident start in life.`,
      name: 'Dr. Rosemary Nasa-Okolie',
      title: 'Batch 1 Alumnus',
    },
    {
      image: 'assets/iMG/student-testimonial2.jpg',
      message: `Same message duplicated for scroll testing.`, // You can change this
      name: 'Mary Bassey',
      title: 'Enrollee Batch 2',
    },
  ];
  
  constructor( private util: UtilService,
    private formService: FormService,
  ) { }
 
  ngOnInit()
  {
    if(this.firstSpoolValid)
    {
      this.getCountrys();
      this.firstSpoolValid = false;
    }
  }
  ngAfterViewInit() {
    this.autoScroll();
  }

   scrollLeft() {
    this.carousel.nativeElement.scrollBy({ left: -320, behavior: 'smooth' });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({ left: 320, behavior: 'smooth' });
  }

  autoScroll() {
    setInterval(() => {
      this.scrollRight();
    }, 5000); // Every 5 seconds
  }

  getCountrys(loggedUser:string=""){
    {
      
      const objLoggedUser = {
        LoggedUser : this.loggedUser
      }
      this.formService.GetCountrys(objLoggedUser)
        .subscribe((obj) => {
          
          if(obj.response === 'success')
          {
            this.objCountrys = [{ CountryID: 0, CountryName: "Select Country" }, ...obj.listCountry];
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

    getStates(countryId: number, loggedUser:string="") {
      {
        debugger
        this.formService.GetStates(countryId,loggedUser)
          .subscribe((obj) => {
            debugger
            if(obj.response === 'success')
          {
            this.objStates = [{ StateID: 0, StateName: "Select State" }, ...obj.listStates];
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

  ApplyForInternship(){

  }
  onFileSelected(file:any)
{}

submitInternshipApplication(){
  if(this.eFirstName === '')
    return this.util.snackBarNotification(
      "Enter First name!");
  if(this.eLastName === '')
    return this.util.snackBarNotification(
      "Enter Last name!");
      if(this.eEmail === '')
    return this.util.snackBarNotification(
      "Enter Email address!");
      if(this.ePhone === '')
    return this.util.snackBarNotification(
      "Enter Phone number!");
      if(this.eGender === '')
    return this.util.snackBarNotification(
      "Enter Gender!");
      if(this.eDOB === '')
    return this.util.snackBarNotification(
      "Enter Date of Birth!");
      if(this.eCountryId === 0)
    return this.util.snackBarNotification(
      "Select Country!");
      if(this.eStateId === 0)
    return this.util.snackBarNotification(
      "Select State!");
      if(this.eAddress === '')
    return this.util.snackBarNotification(
      "Enter Address!");
      if(this.eEducationLevel === '')
    return this.util.snackBarNotification(
      "Enter Education Level!");
      if(this.eSchool === '')
    return this.util.snackBarNotification(
      "Enter Institution!");
      if(this.eCourseofStudy === '')
    return this.util.snackBarNotification(
      "Enter Course of Study!");
      if(this.eDuration === '')
    return this.util.snackBarNotification(
      "Enter Duration!");
      if(this.eStartDate === '')
    return this.util.snackBarNotification(
      "Enter Start date!");

  const objInternshipApplication = {
    FirstName : this.eFirstName,
    LastName : this.eLastName,
    Email : this.eEmail,
    Phone : this.ePhone,
    Gender : this.eGender,
    DOB : this.eDOB,
    Address : this.eAddress,
    EducationLevel : this.eEducationLevel,
    School : this.eSchool,
    CourseOfStudy : this.eCourseofStudy,
    Skills : this.eSkills,
    Duration : this.eDuration,
    StartDate : this.eStartDate,
    CoverLetter : this.eCoverLetter,
    CountryId: this.eCountryId,
    StateId: this.eStateId
    
  }
  this.isBusy = true;
  this.formService.SubmitInternshipApplication(objInternshipApplication)
        .subscribe((res:any) => {
          
          if(res.response === 'success')
          {
            this.clearFields();
            this.isBusy = false;
            return this.util.snackBarNotification(
              "Internship Applied Successfully!. We will be in touch, A mail has been sent to your email address."
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
          if(err.status === 400)
          {
            if(err.error === 'Invalid email syntax')
              return this.util.snackBarNotification(
            "Invalid Email address!");
            if(err.error === 'Already Registered')
              return this.util.snackBarNotification(
            "Already registered for Internship!");
          }
          else
          {
             console.log(err.error);
            return this.util.snackBarNotification(
            "Something went wrong, please check your internet connection"
            );
          }
          
        }
      );
}

clearFields(){
  this.eFirstName = '';
  this.eLastName = '';
  this.eEmail = '';
  this.ePhone = '';
  this.eGender = '';
  this.eDOB = '';
  this.eAddress = '';
  this.eEducationLevel = '';
  this.eSchool = '';
  this.eCourseofStudy = '';
  this.eSkills = '';
  this.eStartDate = '';
  this.eEndDate = '';
  this.eCoverLetter = '';
}

}
