import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DashboardService {
  constructor() {}

  getDashboard = () => {
    return { totalPatient: 20, totalUser: 10, totalTest: 50 };
  };
}
