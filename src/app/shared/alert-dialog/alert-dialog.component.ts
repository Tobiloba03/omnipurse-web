import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-dialog',
  template: `
    <mat-card-subtitle class="bold">
      {{data.title ? data.title : 'Notification'}}
    </mat-card-subtitle>
    <div [innerHTML]="data.message"></div>
    <br />

    <button mat-button class="pull-right"
    [color]="(data.color ? data.color : '')" (click)="dialogRef.close(true)">
      {{data.affirm ? data.affirm : 'Ok'}}
    </button>

    <button *ngIf="data.purpose === 'confirm'" mat-button class="pull-right"
      [color]="'warn'" (click)="dialogRef.close(false)">
      {{data.negate ? data.negate : 'Cancel'}}
    </button>
  `
})

export class AlertDialogComponent implements OnInit {
  // private positionRelativeToElement: ElementRef;

  constructor(public dialogRef: MatDialogRef<AlertDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }
}
