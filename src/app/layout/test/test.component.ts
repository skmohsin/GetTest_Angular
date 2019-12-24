import { PatientService } from "./../../shared/services/patient.service";
import { ResponseWrapper } from "./../../shared/ResponseWrapper";
import { ITest } from "./../../models/test.model";
import { TestService } from "./../../shared/services/test.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"]
})
export class TestComponent implements OnInit {
  tests: ITest[];
  displayedColumns = ["Name"];
  dataSource: any;
  patientID: Number;

  constructor(
    private testService: TestService,
    private patientService: PatientService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.patientID = params.id;
      console.log(params);
    });
  }

  ngOnInit() {
    this.getPatientTests(this.patientID);
  }

  getPatientTests(patientID) {
    this.patientService.getPatientTests(patientID).subscribe(
      (response: ResponseWrapper) => {
        console.log(response);
        this.tests = response.data as ITest[];
        console.log('test', this.tests);
      },
      err => {
        console.log(err);
      }
    );
  }
}
