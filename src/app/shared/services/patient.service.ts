import { Injectable } from "@angular/core";
import { Api } from "../api";
@Injectable({
  providedIn: "root"
})
export class PatientService {
  constructor(private api: Api) {}

  getPatients = () => {
    return this.api.get(`patients`);
  };

  postPatient = patient => {
    return this.api.post(`patient`, patient);
  };

  putPatient = patient => {
    return this.api.put(`patient/${patient.patientID}`, patient);
  };

  deletePatient = patient => {
    return this.api.delete(`patient/${patient.patientID}`);
  };
}
