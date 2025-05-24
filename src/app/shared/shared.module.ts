import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import Angular Material Modules
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AlertDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    RouterModule
  ],
  exports: [
    MatTableModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    RouterModule,
    AlertDialogComponent,
  ]
})
export class SharedModule { }
