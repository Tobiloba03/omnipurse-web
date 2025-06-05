import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { UtilService } from 'src/app/services/util.service';
import { FormControl } from '@angular/forms';
import { CreateUser } from 'src/app/interfaces/interfaces';
import { FormService } from 'src/app/services/form.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  firstname: string = '';
  lastname: string = '';
  companyname: string = '';
  email: string = '';
  phone: string = '';
  countryId: number = 0;
  stateId: number = 0;

  objCountrys: any[] = [];
  objStates: any[] = [];
  
  password: string = '';
  isBusy: boolean = false;
  userType: string = 'individual'; 
  isCompany: boolean = false;
  loggedUser: string = '';
  constructor(
    private authService: AuthService,
    private util: UtilService,
    private dialogRef: MatDialogRef<CreateAccountComponent>,
    private formService: FormService,
    private ut: UtilService
  ) {}

  ngOnInit(): void {
    this.getLoggedUser();
  }

  onUserTypeChange(): void {
    if(this.userType === 'company')
    {
      this.isCompany = true;
      this.firstname = '';
      this.lastname = '';
    }
    else
    {
      this.isCompany = false;
      this.companyname = '';
    }
  }

   getLoggedUser()
  {
    const user = localStorage.getItem("user");
    if (user === null || user === "null") {
      this.loggedUser = '';
    }
    else
    {
      this.loggedUser = user;
    }
    this.getCountrys(this.loggedUser);
  }

  onSubmit(): void {
    debugger
    const objCreateUser : CreateUser = {
      FirstName: this.firstname,
      LastName: this.lastname,
      CompanyName: this.companyname,
      EmailAddress: this.email,
      PhoneNumber: this.phone,
      CountryId: this.countryId,
      StateId: this.stateId,
      Password: this.password
    }
    if(!this.isCompany && objCreateUser.FirstName === '')
      return this.util.snackBarNotification(
          'Enter first name!'
        );
    if(!this.isCompany && objCreateUser.LastName === '')
      return this.util.snackBarNotification(
          'Enter last name!'
        );
        if(this.isCompany && objCreateUser.CompanyName === '')
      return this.util.snackBarNotification(
          'Enter company name!'
        );
    if(objCreateUser.EmailAddress === '')
      return this.util.snackBarNotification(
          'Enter email address!'
        );
    if(objCreateUser.CountryId === 0)
      return this.util.snackBarNotification(
          'Select a country!'
        );
    if(objCreateUser.StateId === 0)
      return this.util.snackBarNotification(
          'Select a state!'
        );
    if(objCreateUser.Password === '')
      return this.util.snackBarNotification(
          'Enter password!'
        );
        this.isBusy = true;
    this.authService.createAccount(objCreateUser).subscribe(
      (res) => {
        if(res.response === 'invalid email')
        {
          return this.util.snackBarNotification(
          'Invalid email address!'
        )
        }
        if(res.response === 'failed')
        {
          return this.util.snackBarNotification(
          'Something went wrong!'
        )
      }
        if(res.response === 'success')
        {
          this.util.snackBarNotification(
          'Account created!, Sign in.'
        )
        }
         this.isBusy = false;
        this.dialogRef.close();
      },
      (err) => {
        this.isBusy = false;
        
          this.util.snackBarNotification(
            'Something went wrong, please check your internet connection'
          )}
    );
  }

  onCloseClick(){
    this.dialogRef.close();
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

}
