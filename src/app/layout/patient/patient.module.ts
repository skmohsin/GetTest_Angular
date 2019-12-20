import { ConfirmDialogComponent } from './dialog/confirm.patient.dialog';
import { PatientDialog } from './dialog/patient.dialog';
import { PatientRoutingModule } from './patient-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

import { PatientComponent } from "./patient.component";

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule,
   MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule,
    MatGridListModule,
        MatCardModule,
        MatCardModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        FlexLayoutModule.withConfig({addFlexToParent: false})
  ],
  entryComponents: [PatientComponent, PatientDialog, ConfirmDialogComponent],
  declarations: [PatientComponent, PatientDialog, ConfirmDialogComponent],
})
export class PatientModule { }
