import { Injectable } from '@angular/core';
import {Api} from '../api'
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  constructor(private api: Api) { }

  getPatients = () => {
    return this.api.get('patients');
  }

  postPatient = (patient) => {
    return this.api.post('patient', patient);
  }
}
