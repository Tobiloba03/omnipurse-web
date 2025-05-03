import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { UtilService } from 'src/app/services/util.service';
import { FormControl } from '@angular/forms';
import { CreateUser } from 'src/app/interfaces/interfaces';
import { FormService } from 'src/app/services/form.service';

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

  constructor(
    private authService: AuthService,
    private util: UtilService,
    private dialogRef: MatDialogRef<CreateAccountComponent>,
    private formService: FormService
  ) {}

  ngOnInit(): void {
  }

  onUserTypeChange(): void {
    this.isCompany = this.userType === 'company';
  }

  onSubmit(): void {
    const objCreateUser : CreateUser = {
      FirstName: this.firstname,
      LastName: this.lastname,
      EmailAddress: this.email,
      PhoneNumber: this.phone,
      CountryId: this.countryId,
      StateId: this.stateId,
      Password: this.password
    }
    this.isBusy = true;
    this.authService.createAccount(objCreateUser).subscribe(
      () => {
        this.util.snackBarNotification(
          'Account created!'
        )
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

  getCountrys() {
    {
      const sub = this.formService.GetCountrys()
        .subscribe((obj) => {
          this.objCountrys = [{ countryID: 0, countryName: "Select Country" }, ...obj];
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

    getStates() {
      {
        const sub = this.formService.GetStates()
          .subscribe((obj) => {
            this.objCountrys = [{ stateID: 0, stateName: "Select State" }, ...obj];
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
