import { ResponseWrapper } from "src/app/shared/ResponseWrapper";
import { PatientService } from "./../../../shared/services/patient.service";
import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { IPatient } from "src/app/models/Patient.model";

@Component({
  selector: "patient.dialog",
  styleUrls: ["./patient.dialog.scss"],
  templateUrl: "./patient.dialog.html"
})
export class PatientDialog {
  patient: IPatient = { name: "", mobileNumber: "", gender: "", address: "" };
  constructor(
    public dialogRef: MatDialogRef<PatientDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private patientService: PatientService
  ) {
    if (data.patient != undefined) {
      this.patient = data.patient;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(patient: any) {
    if (patient.patientID == undefined) {
      return this.patientService.postPatient(patient).subscribe(
        (response: ResponseWrapper) => {
          this.dialogRef.close();
        },
        error => {
          console.log(error);
        }
      );
    } else {
      return this.patientService.putPatient(patient).subscribe(
        (response: ResponseWrapper) => {
          this.dialogRef.close();
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
