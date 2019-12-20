import { IPatient } from "../../models/Patient.model";
import { PatientService } from "../../shared/services/Patient.service";
import { Component, OnInit } from "@angular/core";
import { ResponseWrapper } from "src/app/shared/ResponseWrapper";
import { MatTableDataSource, MatDialog } from '@angular/material';
import { PatientDialog } from "./dialog/patient.dialog";
import { ConfirmDialogComponent, ConfirmDialogModel } from "./dialog/confirm.patient.dialog";


@Component({
  selector: "app-Patient",
  templateUrl: "./patient.component.html",
  styleUrls: ["./patient.component.scss"]
})
export class PatientComponent implements OnInit {

  patients: IPatient[];
  displayedColumns = ['Name', 'Mobile Number', 'Gender', 'Address','Action'];
  dataSource : any;



  constructor(private patientService: PatientService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getPatients();
  }

  getPatients(){
    return this.patientService.getPatients().subscribe((response: ResponseWrapper) => {
      this.patients = response.data as IPatient[];
      this.dataSource = new MatTableDataSource(this.patients);
      console.log(this.patients);
    }, error => {
      console.log(error);
    })
  }


  openDialog(patient): void {
    const dialogRef = this.dialog.open(PatientDialog, {
      width: '350px',
      data: { patient }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getPatients();
      //this.animal = result;
    });
  }

  confirmDialog(): void {
    const message = `Are you sure you want to do this?`;
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {

    });
  }
}








