import { Injectable } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AlertDialogComponent } from '../shared/alert-dialog/alert-dialog.component';
// import * as FileSaver from 'file-saver';
// import * as XLSX from 'xlsx';


const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private dialog: MatDialog, private _snackBar: MatSnackBar) { }

  formatMoney(n:any) {
    try {
      n = parseFloat(n).toFixed(2);
      const x = Number(n).toLocaleString('en');
      return '₦ ' + x;
    } catch (e) {
      return n;
    }
  }

  formatDate(date:any) {
    try {
      return date.split('T')[0];
    } catch (e) {
      return date;
    }
  }

  DateTime() {
    //try {
      return new Date().toLocaleString().replace(',', '').replace(/:../, '');
    // } catch (e) {
    //   console.log(e);
    // }
  }

  notify(message:any, disableClose?:any, purpose?:any) {
    const m = message !== 'timeout of 3000ms exceeded' ? message :
      'Check-In request complete. Please prompt enrolee to confirm check-in on WhatsApp';

    return this.dialog.open(AlertDialogComponent,
      {
        disableClose: disableClose === null ? false : disableClose,
        data: {
          purpose,
          confirm,
          message: m
        },
        panelClass: 'full-width-dialog'
      });
  }

  notifyForUser(message:any, disableClose?:any, purpose?:any, title?:any, affirm?:any, negate?:any) {
    const m = message !== 'timeout of 3000ms exceeded' ? message :
      'Check-In request complete. Please prompt enrolee to confirm check-in on WhatsApp';

    return this.dialog.open(AlertDialogComponent,
      {
        data: {
          title,
          purpose,
          confirm,
          message: m,
          affirm,
          negate
        },
        height: '150px',
        width: '300px',
        disableClose: true
        //panelClass: 'full-width-dialog'
      });
  }

  notification(message:any, disableClose?:any, purpose?:any, title?:any, affirm?:any, negate?:any) {
    const m = message !== 'timeout of 3000ms exceeded' ? message :
      'Check-In request complete. Please prompt enrolee to confirm check-in on WhatsApp';

    return this.dialog.open(AlertDialogComponent,
      {
        data: {
          title,
          purpose,
          confirm,
          message: m,
          affirm,
          negate
        },
        disableClose: true,
        panelClass: 'full-width-dialog'
      });
  }

  notifySnackbar() {
    // const m = message !== 'timeout of 3000ms exceeded' ? message :
    //   'Check-In request complete. Please prompt enrolee to confirm check-in on WhatsApp';
    let durationInSecs = 10;

    return this._snackBar.openFromComponent(AlertDialogComponent, {
      duration: 10000,
    });
  }

  snackBarNotification(str: string) {
    this._snackBar.open(str, 'Ok', {
      duration: 5000,
    });
  }

  copyMessage(val: string) {
    const selBox = document.createElement('textarea');''
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.snackBarNotification(`${val} copied!`);
  }

  titleCase(str:string) {
    try {
      const splitStr = str.toLowerCase().split(' ');
      for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
      }
      return splitStr.join(' ');
    } catch (e) {
      return str;
    }
  }

  // EXPORT FUNCTION
  // ECXEL
  // public exportAsExcelFile(json: any[], excelFileName: string): void {
  //   const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
  //   const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
  //   const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  //   this.saveAsExcelFile(excelBuffer, excelFileName);
  // }

  // private saveAsExcelFile(buffer: any, fileName: string): void {
  //   const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
  //   FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  // }

  // CSV
  downloadFile(data:any, filename = 'data', headerlist: string[]): void {
    let csvData = this.ConvertToCSV(data, headerlist);
    let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    let dwldLink = document.createElement('a');
    let url = URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
      dwldLink.setAttribute('target', '_blank');
    }
    dwldLink.setAttribute('href', url);
    dwldLink.setAttribute('download', filename + '.csv');
    dwldLink.style.visibility = 'hidden';
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }

  ConvertToCSV(objArray:any, headerList:any) {
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = 'S.No,';
    for (let index in headerList) {
      row += headerList[index] + ',';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';
    for (let i = 0; i < array.length; i++) {
      let line = (i + 1) + '';
      for (let index in headerList) {
        let head = headerList[index];
        line += ',' + array[i][head];
      }
      str += line + '\r\n';
    }
    return str;
  }

  getAge(dateString:any) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
